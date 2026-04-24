# Audiobook Platform Monorepo

This repository contains a cloud-first audiobook platform scaffold with:

- `backend/`: FastAPI API service (Railway target)
- `frontend/`: Next.js web/admin/listener shell
- `frontend/src-tauri/`: Tauri desktop shell scaffold
- `.github/workflows/`: CI/CD workflow skeletons
- `docs/`: architecture and operational notes

## Phase 0 Status

Implemented initial repository setup:

- Monorepo directory structure
- Backend FastAPI skeleton with `/api/health`
- Frontend Next.js skeleton page structure
- Tauri v2 config scaffold
- Environment examples
- GitHub Actions workflow skeletons
- Initial docs

## Quick Start

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e .[dev]
uvicorn app.main:app --reload --port 8000
```

Health check:

```bash
curl http://localhost:8000/api/health
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Planned Phases

See `docs/architecture.md`, `docs/assumptions.md`, and `docs/project-steps-progress.md` for implementation sequencing, assumptions, and live status tracking.
