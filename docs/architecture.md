# Architecture

## Monorepo Layout

```text
repo/
  backend/
  frontend/
  frontend/src-tauri/
  .github/workflows/
  docs/
```

## Planned Implementation Phases

1. Repository setup (complete)
2. Backend foundation
3. Audiobook metadata API
4. Upload + streaming with storage abstraction
5. Progress, bookmarks, and metrics
6. Frontend auth shell
7. Listener UX
8. Admin UX
9. Tauri desktop integration
10. CI/CD draft releases and Railway deployment
11. Documentation hardening

## Storage Boundary

Backend business logic must depend on a storage interface so filesystem and object-storage
providers can be swapped later without API-level changes.
