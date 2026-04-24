.PHONY: backend-install backend-test backend-lint frontend-install frontend-test frontend-lint frontend-build tauri-build ci

backend-install:
	cd backend && pip install -e .[dev]

backend-test:
	cd backend && pytest

backend-lint:
	cd backend && ruff check .

frontend-install:
	cd frontend && npm install

frontend-test:
	cd frontend && npm run test --if-present

frontend-lint:
	cd frontend && npm run lint

frontend-build:
	cd frontend && npm run build

tauri-build:
	cd frontend && npm run tauri build --if-present

ci: backend-lint backend-test frontend-lint frontend-build
