# PANOPTICON — Site

Astro 5 website for panopticoncomic.com.

## Quick Start

```bash
cd ~/Desktop/"PANOPTICON AVATAR PROJECT FOLDER"/panopticon-site
npm install
npm run dev
```

Open http://localhost:4321 in your browser.

## Pages

| Page       | URL        | File                            |
|------------|------------|---------------------------------|
| Home       | /          | src/pages/index.astro           |
| About      | /about     | src/pages/about.astro           |
| Reader     | /read      | src/pages/read/index.astro      |
| Intake     | /avatar    | src/pages/avatar.astro          |
| Unlocked   | /unlocked  | src/pages/unlocked.astro        |

## Adding Comic Issues

Edit `src/pages/read/index.astro` and add to the `chapters` array.
Drop cover images into `public/images/covers/` named `issue-01.jpg`, etc.

## Embedding the Avatar Maker

1. Open the Godot project in Godot 4
2. Project → Export → Add Web preset
3. Export Project → choose output path: `panopticon-site/public/avatar-maker/`
4. Export as `index.html`
5. The iframe in avatar.astro loads `/avatar-maker/index.html` automatically

## Deploying to panopticoncomic.com

Recommended: connect your GitHub repo to Netlify or Vercel.
They auto-build on every push — no extra config needed for Astro.
