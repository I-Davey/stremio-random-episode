# Assumptions

- MVP is private and invitation-only; no self-registration.
- Listener users can access all published books in MVP.
- PostgreSQL is the system of record for metadata and progress.
- Initial audio storage backend is filesystem-based with a clean abstraction boundary.
- Railway hosts backend + PostgreSQL for production deployment.
- GitHub Actions is the primary CI/CD and release automation engine.
