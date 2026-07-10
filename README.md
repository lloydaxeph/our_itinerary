# Vietnam 2026 — Hanoi & Sapa Itinerary

A mobile-first, swipeable trip itinerary for Hanoi + Sapa, Vietnam (Nov 4–10, 2026). Each day is a
"page" broken into time blocks with recommended places/activities. Friends register a username,
tap checkboxes to pick the activities they want to do, and hit **Submit** to save their picks.

- **Main app** — swipeable day-by-day itinerary with voting: `/`
- **Results** — public, read-only tally of votes per item: `/results`
- **Admin** — password-protected page to view/edit/delete any vote row: `/admin`

Built with React + Vite on the frontend, and Cloudflare Pages Functions + D1 (SQLite) on the
backend. Hosted entirely on Cloudflare's free tier.

---

## For developers

### Install

```
npm install
```

### Run locally

**`npm run dev`** — frontend only, fast hot-reload. Voting/admin/results won't work since there's
no API backing them; use this for pure UI/layout work on the itinerary pages.

```
npm run dev
```

**`npm run dev:full`** — full stack, including the API and a local D1 database (recommended for
testing voting/admin/results):

```
npm run dev:full
```

This builds the frontend and serves it at `http://127.0.0.1:8788` with the D1 binding read from
`wrangler.toml`, using a local SQLite file under `.wrangler/state/`. It doesn't hot-reload — re-run
it after making changes. Local admin password comes from `.dev.vars`:

```
# .dev.vars (gitignored, create this file yourself)
ADMIN_PASSWORD=your-local-test-password
```

Apply the schema to the local database before first use:

```
npm run db:migrate:local
```

### Build

```
npm run build
```

Outputs the static site to `dist/`.

### Deploy

This project is connected to GitHub — pushing to `main` triggers a Cloudflare Pages build and
deploy automatically. You normally don't need to deploy manually.

If you ever do need a one-off manual deploy:

```
npm run build
npx wrangler pages deploy dist --project-name our-itinerary
```

### Database

- Provider: Cloudflare D1 (SQLite), database name `our-itinerary-db`, binding `DB`.
- Schema lives in `migrations/0001_init.sql` — three tables: `users`, `votes`, `admin_sessions`.
- To apply a new migration file to the live database: `npm run db:migrate:remote`.

All commands below use `wrangler d1 execute our-itinerary-db --remote` to run SQL directly
against the **live** database. Drop `--remote` to target your local dev database instead.

**View all votes:**

```
npx wrangler d1 execute our-itinerary-db --remote --command "SELECT * FROM votes;"
```

**View all registered users:**

```
npx wrangler d1 execute our-itinerary-db --remote --command "SELECT * FROM users;"
```

**Manually add a vote:**

```
npx wrangler d1 execute our-itinerary-db --remote --command "INSERT INTO votes (user, item_id, item_name) VALUES ('alice', '0-1-0', 'Airport Bus 86 to Old Quarter');"
```

**Update a vote row** (find the `vote_id` from the SELECT above first):

```
npx wrangler d1 execute our-itinerary-db --remote --command "UPDATE votes SET item_name = 'New Name' WHERE vote_id = 5;"
```

**Delete a single vote row:**

```
npx wrangler d1 execute our-itinerary-db --remote --command "DELETE FROM votes WHERE vote_id = 5;"
```

**Delete all votes for one user** (keeps their username registered):

```
npx wrangler d1 execute our-itinerary-db --remote --command "DELETE FROM votes WHERE user = 'alice' COLLATE NOCASE;"
```

**Full reset — wipe all votes, usernames, and admin sessions** (irreversible; confirm with
whoever owns the trip before running this). Run as separate commands — D1's `--command` doesn't
reliably execute multiple semicolon-chained statements in one call — and clear the `votes`
autoincrement sequence so new votes don't resume from the old `vote_id` count:

```
npx wrangler d1 execute our-itinerary-db --remote --command "DELETE FROM votes;"
npx wrangler d1 execute our-itinerary-db --remote --command "DELETE FROM users;"
npx wrangler d1 execute our-itinerary-db --remote --command "DELETE FROM admin_sessions;"
npx wrangler d1 execute our-itinerary-db --remote --command "DELETE FROM sqlite_sequence WHERE name='votes';"
```

**Emergency recovery** — D1 keeps point-in-time snapshots for the last 30 days ("Time Travel"),
which can undo an accidental delete like the one above:

```
npx wrangler d1 time-travel info our-itinerary-db
npx wrangler d1 time-travel restore our-itinerary-db --timestamp="2026-07-09T23:15:00Z"
```

### Admin password

The `/admin` page password is stored as a Cloudflare Pages secret (`ADMIN_PASSWORD`), not in code.
To change it:

```
npx wrangler pages secret put ADMIN_PASSWORD --project-name our-itinerary
```
