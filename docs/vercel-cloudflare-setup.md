# Vercel and Cloudflare setup

The repository selects the Vercel adapter on Vercel. `vercel.json` sets the Astro
framework, `npm run build`, and automatic output detection, overriding an old
Output Directory value from the dashboard. Both brands share one deployment:
Codeaxes at `/` and Kuroaxe at `/kuroaxe`.

## Vercel project settings

1. Open the `orbitlee/codeaxes-website` project in Vercel.
2. Under Git, confirm the connected repository is
   `gautamx8055/Codeaxes-website` and the Production Branch is `main`.
3. Under Build and Deployment, use the repository root for Root Directory
   (the folder containing `package.json`, `astro.config.mjs`, and `vercel.json`).
   Clear any custom Output Directory override. The framework is Astro and the
   build command is `npm run build`; these are also set in `vercel.json`.
4. Under Environment Variables, remove `BASE_PATH` or set it to `/` for
   Production. `/Codeaxes-website` is for the GitHub Pages preview only.
   The default `SITE_URL` is `https://www.codeaxes.com`; remove any preview-origin
   override or set it to that production origin.
5. Deploy the latest `main` commit. If a deployment was created before changing
   project settings or variables, redeploy the latest commit after saving them.
6. Open `https://codeaxes-website.vercel.app/` and
   `https://codeaxes-website.vercel.app/kuroaxe` to check the deployment before
   switching the public domain.

## Cloudflare DNS

Keep the existing Cloudflare nameservers. In Cloudflare, open
`codeaxes.com` → DNS → Records.

The Vercel domain screen supplied on November 14, 2026 requests this CNAME target:

```text
07b50a8bcb9e5b96.vercel-dns-017.com
```

Always compare this with the current value in Vercel → Settings → Domains. If
Vercel displays a different target, copy that current value instead.

1. Replace the old apex A record (`@`, previously `5.9.161.137`) with a CNAME
   named `@`, targeting the value shown by Vercel.
2. Update the CNAME named `www` to the same Vercel-provided target rather than
   `codeaxes.com`.
3. Set both records to **DNS only** (gray cloud) and **TTL: Auto**.
4. Replace conflicting A/AAAA/CNAME records for those two website names only.
   Keep email MX/TXT records and unrelated subdomains.
5. Save, then click Refresh for both names in Vercel → Settings → Domains after
   DNS updates propagate. Confirm both domains show a valid configuration and
   HTTPS certificate. The existing apex-to-`www` redirect can remain in place.

## Formspree delivery check

The two enquiry forms and Codeaxes product-notes signup post to
`https://formspree.io/f/mgakoyol`. No Formspree secret is required in Vercel.
Submissions include `brand` and `form_type` so they can be distinguished.

After deploying, submit one enquiry from each brand using an email address you
control. Check the success message, the Formspree dashboard, and the intended
notification inbox. Verify the form's notification recipient in Formspree and
complete any email verification requested there. Local checks use mocked
responses and do not confirm live email delivery.

## Verification commands

```bash
npm run check
VERCEL=1 npm run build
npm run verify:vercel
npm run verify:forms
npm run verify:catalogue
```

The Vercel check verifies static pages/assets, redirects, API routes, jobs data
packaging, and function startup. Public job listings are packaged with the
function; live job changes need a durable store to survive deployments.

References: [Astro Vercel adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/),
[Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json),
[Cloudflare with Vercel](https://vercel.com/kb/guide/can-i-use-a-proxy-on-top-of-my-vercel-deployment).
