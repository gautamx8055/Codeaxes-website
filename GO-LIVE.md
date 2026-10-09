# Go live with only a domain

Yes. The domain is the only thing you pay for. The website and the backend can both run for free on one small server.

GitHub Pages is not enough for this. It only serves the finished pages. It does not run `POST /api/contact`, `POST /api/newsletter`, or `POST /api/jobs`. Those routes need the Node server that is already in this project. On that server, enquiries and product-note signups are saved in `data/inbox/`, and jobs published by the HR portal are saved in `data/jobs.json`.

## What stays free

| Piece | Free option | What you pay |
| --- | --- | --- |
| Domain name | You already own it, or you buy one | About $10–15 a year if you buy it |
| Website + API | Oracle Cloud Always Free virtual machine | $0 |
| HTTPS | Caddy gets a free certificate from Let's Encrypt | $0 |

Oracle's Always Free plan includes a small virtual machine (up to 2 OCPUs and 12 GB of memory on the Ampere shape, or two tiny AMD machines) and disk space that keeps your files after a restart. That disk is what keeps form submissions and job posts. A free app host such as Render's free web service deletes local files when it sleeps or restarts, so it is a bad fit for this project.

Two limits to know:

- Oracle sometimes says "out of host capacity" in a region. Try another availability domain, or wait and try again.
- An Ampere machine that stays almost idle for 7 days can be removed. A public website usually has enough traffic. If it does not, use one of the tiny AMD machines instead. Those are not removed for being idle.

## 1. Point the project at your domain

In `astro.config.mjs`, change the site settings before you build on the server:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  // keep the rest of the file
});
```

`output: 'server'` is what turns the contact form, the notes form, and the jobs API on. `base: '/'` is required because the site will live at the domain root, not at `/Codeaxes-website`.

## 2. Create the free server

1. Create an Oracle Cloud account and pick a home region close to your visitors. Always Free machines can only be created in that home region.
2. Create a virtual machine:
   - Shape: `VM.Standard.A1.Flex` with 1 OCPU and 6 GB memory, or `VM.Standard.E2.1.Micro` if Ampere is unavailable.
   - Image: Ubuntu 24.04.
   - Add your SSH public key.
3. In the subnet security list, allow inbound TCP on ports `22` (SSH), `80` (HTTP), and `443` (HTTPS).
4. Copy the machine's public IP address.

## 3. Point the domain at that IP

At the place you bought the domain, add these DNS records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | the server's public IP |
| A | `www` | the same IP |

Wait until `yourdomain.com` resolves to that IP. This can take a few minutes or a few hours.

## 4. Install the site on the server

SSH in, then run:

```bash
sudo apt update
sudo apt install -y git curl
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

sudo mkdir -p /opt/codeaxes
sudo chown "$USER" /opt/codeaxes
git clone git@github.com:gautamx8055/Codeaxes-website.git /opt/codeaxes
cd /opt/codeaxes
npm ci
```

Create `/opt/codeaxes/.env`:

```bash
JOBS_API_KEY=paste-a-long-random-string-here
JOBS_APP_ORIGIN=https://your-hr-portal-domain
```

`JOBS_API_KEY` is the password the HR portal must send. `JOBS_APP_ORIGIN` is only needed if the portal calls this API from a browser on another domain.

Build and start:

```bash
npm run build
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs
```

Open `http://THE_PUBLIC_IP:4321` and confirm the home page loads. Stop it with Ctrl+C after that check. The next step keeps it running.

## 5. Keep the server running

Create `/etc/systemd/system/codeaxes.service`:

```ini
[Unit]
Description=Codeaxes website
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/opt/codeaxes
Environment=HOST=0.0.0.0
Environment=PORT=4321
EnvironmentFile=/opt/codeaxes/.env
ExecStart=/usr/bin/node /opt/codeaxes/dist/server/entry.mjs
Restart=always

[Install]
WantedBy=multi-user.target
```

Change `User=ubuntu` if your SSH user has a different name. Then:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now codeaxes
```

## 6. Turn on HTTPS

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install -y caddy
```

Put this in `/etc/caddy/Caddyfile`:

```caddy
yourdomain.com, www.yourdomain.com {
  reverse_proxy 127.0.0.1:4321
}
```

Then:

```bash
sudo systemctl reload caddy
```

Caddy gets the certificate by itself once DNS points at the server. The site is then `https://yourdomain.com`.

## 7. Connect the HR portal

The portal publishes a job with:

```http
POST https://yourdomain.com/api/jobs
Authorization: Bearer YOUR_JOBS_API_KEY
Content-Type: application/json
```

```json
{
  "externalId": "the-id-from-the-hr-portal",
  "title": "Senior Product Engineer",
  "brand": "codeaxes",
  "department": "Engineering",
  "location": "Pune",
  "employmentType": "full-time",
  "workplace": "hybrid",
  "summary": "Own delivery of product-critical web platforms with Codeaxes squads.",
  "status": "open"
}
```

`brand` is `codeaxes` or `kuroaxe`. Send the same `externalId` again to update that role. Send `"status": "closed"` to take it off the public careers page.

The contact form posts to `https://yourdomain.com/api/contact`. The footer notes form posts to `https://yourdomain.com/api/newsletter`. Saved files are on the server:

- `data/inbox/enquiries.json`
- `data/inbox/notes.json`
- `data/jobs.json`

Copy those files off the server once in a while. They live only on that machine.

## 8. Later updates

On the server:

```bash
cd /opt/codeaxes
git pull
npm ci
npm run build
sudo systemctl restart codeaxes
```

You can leave the GitHub Pages workflow in place as a backup preview. The domain should point at this server, not at GitHub Pages, if you want the forms and the HR jobs to work.
