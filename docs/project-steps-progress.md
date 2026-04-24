# Audiobook Platform Project Steps & Current Progress

This document tracks the full build plan, implementation order, and current completion status.

Legend:

- ✅ Complete
- 🟡 In Progress
- ⬜ Not Started

## Phase 0 — Repository Setup

**Status:** ✅ Complete

### Scope

1. Create monorepo structure.
2. Add root README.
3. Add backend FastAPI skeleton.
4. Add frontend Next.js skeleton.
5. Add Tauri config inside frontend.
6. Add `.env.example` files.
7. Add basic GitHub Actions skeleton.
8. Add docs folder.

### Implemented

- Monorepo structure with `backend/`, `frontend/`, `frontend/src-tauri/`, and `docs/`.
- Root `README.md` with quick start guidance.
- FastAPI app scaffold with `GET /api/health`.
- Next.js app scaffold (`/` and `/login`).
- Tauri v2 scaffold in `frontend/src-tauri/`.
- Backend and frontend `.env.example` files.
- Initial workflow files under `.github/workflows/`.
- Initial architecture and assumptions docs.

### Notes

- CI/CD workflows are currently scaffold-level and need full implementation in later phases.

---

## Phase 1 — Backend Foundation

**Status:** ⬜ Not Started

### Planned tasks

1. FastAPI app structure hardening.
2. Settings/config module.
3. Database connection setup.
4. SQLAlchemy models.
5. Alembic migrations.
6. Auth service.
7. JWT create/validate.
8. Role guards.
9. Admin bootstrap command.
10. Health endpoint (already scaffolded; needs version/config integration).

### Exit criteria

- Migrations run.
- Admin bootstrap works.
- Login returns JWT.
- `/api/auth/me` works.
- CI backend tests pass.

---

## Phase 2 — Audiobook Metadata API

**Status:** ⬜ Not Started

### Planned tasks

- Audiobook CRUD.
- Section CRUD.
- Publish/unpublish.
- Listener published-only listing.
- Admin full listing.
- Pagination where useful.

---

## Phase 3 — Audio Upload and Streaming

**Status:** ⬜ Not Started

### Planned tasks

- Storage abstraction interface.
- Filesystem storage backend.
- Audio upload endpoint.
- Audio file metadata persistence.
- Attach files to books/sections.
- HTTP byte-range streaming.
- Content-type detection.
- File size limits.
- SHA256 checksum.

---

## Phase 4 — Progress, Bookmarks, Metrics

**Status:** ⬜ Not Started

### Planned tasks

- Progress get/update.
- Bookmark CRUD.
- Listening events endpoint.
- Event validation.
- Admin metrics endpoint.

---

## Phase 5 — Next.js Frontend Auth and Shell

**Status:** ⬜ Not Started

### Planned tasks

- App layout expansion.
- Tailwind setup.
- Typed API client.
- Auth token handling.
- Login flow.
- Route protection.
- Admin route protection.
- API base URL environment handling.

---

## Phase 6 — Listener UI

**Status:** ⬜ Not Started

### Planned tasks

- Library page.
- Book detail page.
- Audio player.
- Sections list.
- Resume position.
- Periodic progress saves.
- Save on pause/seek.
- `play_confirmed` threshold logic.
- Bookmark UI.
- Playback speed control.

---

## Phase 7 — Admin UI

**Status:** ⬜ Not Started

### Planned tasks

- Admin dashboard.
- Book list.
- Book create/edit form.
- Upload form.
- Section editor.
- Publish/unpublish controls.
- User creation form.
- Metrics display.

---

## Phase 8 — Tauri Desktop App

**Status:** ⬜ Not Started

### Planned tasks

- Tauri v2 config finalization.
- Next static output for Tauri.
- App identifiers/icons.
- API base URL configuration.
- CI desktop builds.
- Auth + playback validation inside desktop shell.

---

## Phase 9 — CI/CD and Draft Releases

**Status:** ⬜ Not Started

### Planned tasks

- Full PR CI checks.
- Full main CI checks.
- Rolling draft release updater.
- Artifact uploads.
- Checksums.
- Release notes with SHA.
- Manual publish workflow.
- Railway deployment workflow.

---

## Phase 10 — Documentation and Hardening

**Status:** ⬜ Not Started

### Planned tasks

- Full setup/deployment docs.
- Railway environment docs.
- Release process docs.
- Admin usage docs.
- Threat model notes.
- Backup/storage notes.
- Known limitations.

---

## Immediate Next Steps

1. Start Phase 1 by introducing backend config and database wiring.
2. Add SQLAlchemy models and first Alembic migration matching the requested schema.
3. Implement auth login/me endpoints with role-aware guards.
4. Expand backend test suite and wire CI to run it.
