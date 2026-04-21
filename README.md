# Stremio Random Episode Button Add-on

This add-on injects a **Random Episode button** into series detail pages.

When you click into a show, it adds a link button:

- `🎲 Random Episode`

Clicking the button opens a random episode for that show using a Stremio deep link.

## How it works

- The addon handles `meta` requests for IMDb-style series IDs (`tt...`).
- For each series page load, it fetches episodes from Cinemeta.
- It excludes any episode IDs listed in `watchedEpisodeIds`.
- It returns a `meta.links` button that points to:
  - `stremio:///detail/series/{seriesId}/{episodeId}`

## Important limitation

Stremio add-ons do **not** get your account watch history automatically in request args.

So “unwatched only” is based on manual config input:

- `watchedEpisodeIds`: comma-separated values like:
  - `tt0944947:1:1,tt0944947:1:2`

## Can this be hosted entirely on GitHub Pages?

**For this current implementation: no.**

Why:

- GitHub Pages is static hosting.
- This add-on performs runtime work (`fetch` Cinemeta + random selection) on each request.
- Runtime request handling requires a server environment (Node process), not static files only.

## What GitHub Pages can host

- ✅ A landing/install page for your add-on.
- ✅ A fully static add-on (pre-generated JSON responses).

## What needs runtime hosting

- ⚠️ This add-on code in `addon.js` (randomization at request time).
- Host it on Render / Railway / Fly.io / VPS / any Node-capable host.

## Local development

```bash
npm install
npm start
```

Install in Stremio with:

- `http://127.0.0.1:7000/manifest.json`
