"""Verify the supplied brief and built HTML without browser dependencies.

Run after `npm run build`. Supports both production and BASE_PATH preview builds.
"""
from pathlib import Path
from html import unescape
from html.parser import HTMLParser
from urllib.parse import urljoin, urlsplit, unquote
import json
import re

root = Path(__file__).resolve().parents[1]
catalogue = json.loads((root / 'src/data/client-catalogue.json').read_text())
redirects = json.loads((root / 'src/data/service-redirects.json').read_text())
brief = unescape((root / 'docs/client-brief.txt').read_text())
expected = [re.sub(r'^(?:\d+\.\s*|\s*)', '', line.strip())
            for line in brief.splitlines() if re.match(r'^(?:\d+\.\s|)', line.strip())]
groups = catalogue['serviceGroups']
industries = catalogue['industries']
categories = catalogue['technologyCategories']
services = [service for group in groups for service in group['services']]
actual = [label for group in groups for label in [group['name'], *[s['name'] for s in group['services']]]]
actual += [industry['name'] for industry in industries]
actual += [label for industry in industries for label in [industry['name'], *industry['solutions']]]
actual += catalogue['practices']
actual += [label for category in categories for label in [category['name'], *[item for section in category['sections'] for item in section['items']]]]
assert actual == expected, 'Catalogue names or ordering differ from the client brief'
tech_brief = brief.split('CODEAXES — Complete Technology Stack', 1)[1]
subgroups = [line.strip() for line in tech_brief.splitlines() if line.strip() and not re.match(r'^(?:\d+\.\s|)', line.strip())]
assert subgroups == [section['name'] for category in categories for section in category['sections'] if section['name']], 'Technology subgroups differ from the brief'
assert (len(groups), len(services), len(industries), len(catalogue['practices']), len(categories)) == (6, 31, 18, 10, 24)
assert len({service['slug'] for service in services}) == len(services)


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.text = []
        self.ids = set()
        self.links = []
        self.canonical = None
        self.options = []
        self.option_groups = []
        self.entries = 0
        self.catalogue_ids = set()
        self.refresh = None
        self.feed(source)

    def handle_data(self, data):
        self.text.append(data)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs['href']
        if tag == 'option':
            self.options.append(attrs.get('value'))
        if tag == 'optgroup':
            self.option_groups.append(attrs.get('label'))
        if 'data-catalogue-entry' in attrs:
            if attrs.get('id'):
                assert attrs['id'] not in self.catalogue_ids, f'Duplicate catalogue id: {attrs["id"]}'
                self.catalogue_ids.add(attrs['id'])
            self.entries += 1
            assert 'hidden' not in attrs, 'Catalogue entries must be readable without JavaScript'
        if tag == 'meta' and attrs.get('http-equiv', '').lower() == 'refresh':
            self.refresh = attrs.get('content')

    def contains(self, value):
        return value in ''.join(self.text)


build = root / 'dist/client' if (root / 'dist/client/index.html').exists() else root / 'dist'
pages = {}
for path in build.rglob('*.html'):
    route = '/' + str(path.relative_to(build)).removesuffix('index.html').rstrip('/')
    pages[route or '/'] = Page(path.read_text())
base = urlsplit(pages['/'].canonical).path.rstrip('/')
directory = pages['/services']
assert directory.entries == 31
for group in groups:
    assert group['id'] in directory.ids and directory.contains(group['name'])
for service in services:
    page = pages[f'/services/{service["slug"]}']
    assert directory.contains(service['name']) and page.contains(service['name'])
    assert urlsplit(page.canonical).path == f'{base}/services/{service["slug"]}'
contact = pages['/contact']
assert contact.option_groups == [group['name'] for group in groups]
assert {service['slug'] for service in services} <= set(contact.options)
industry_page = pages['/about/industries']
assert industry_page.entries == 18
for industry in industries:
    assert industry['slug'] in industry_page.ids and industry_page.contains(industry['name'])
    for solution in industry['solutions']:
        assert industry_page.contains(solution), f'Missing industry solution: {solution}'
for practice in catalogue['practices']:
    assert industry_page.contains(practice)
tech_page = pages['/about/technologies']
assert tech_page.entries == 24
for category in categories:
    assert category['id'] in tech_page.ids and tech_page.contains(category['name'])
    for section in category['sections']:
        if section['name']:
            assert tech_page.contains(section['name'])
        for item in section['items']:
            assert tech_page.contains(item), f'Missing technology: {item}'

# Crawl links in all built pages, including cross-brand links and old fragments.
checked = 0
for route, page in pages.items():
    for href in page.links:
        absolute = urlsplit(urljoin(f'https://test.invalid{base}{route.rstrip("/")}/', href))
        if absolute.netloc != 'test.invalid' or absolute.scheme != 'https':
            continue
        pathname = unquote(absolute.path).rstrip('/') or '/'
        if base:
            assert pathname == base or pathname.startswith(base + '/'), f'Link on {route} escapes BASE_PATH: {href}'
            pathname = pathname[len(base):] or '/'
        target = pages.get(pathname)
        if not target:
            # Static assets and adapter-managed redirects are valid targets.
            assert (build / pathname.lstrip('/')).is_file() or pathname.removeprefix('/services/') in redirects, f'Broken link on {route}: {href}'
        elif absolute.fragment:
            assert unquote(absolute.fragment) in target.ids, f'Broken fragment on {route}: {href}'
        checked += 1
for old, target in redirects.items():
    assert target is None or target in {service['slug'] for service in services}
    if base:
        page = pages[f'/services/{old}']
        destination = f'{base}/services' + (f'/{target}' if target else '')
        assert page.refresh and destination in page.refresh, f'Missing static preview redirect: {old}'
for route in ['/kuroaxe', '/kuroaxe/about', '/kuroaxe/contact', '/kuroaxe/services']:
    assert route in pages, f'Missing Kuroaxe page: {route}'
solution_count = sum(len(industry['solutions']) for industry in industries)
tech_count = sum(len(section['items']) for category in categories for section in category['sections'])
print(f'Passed: brief matches exactly; 31 services, {solution_count} industry solutions, 10 practices, {tech_count} technology entries; {checked} internal links across {len(pages)} pages.')
