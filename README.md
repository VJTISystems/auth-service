# Auth Service

This repository contains a simple authentication service meant as a starting point for the **authservice** team.

## Project layout

```
auth-service/
├── src/                # application source code
│   ├── config/         # configuration files
│   ├── controllers/    # request handlers
│   ├── middleware/     # express middlewares (auth, logging, etc.)
│   ├── models/         # data models (in-memory for now)
│   ├── routes/         # express routers
│   ├── services/       # business logic
│   └── utils/          # helper utilities (logger, etc.)
├── tests/              # jest/supertest integration tests
├── docs/               # documentation (see docs/testing.md)
├── package.json        # npm metadata + scripts
└── README.md           # this file
```

> The service currently uses a minimal in-memory data store and is intended for demonstration. Replace the model layer with a real database when moving to production.

## Getting Started

Install dependencies and start a development server:

```bash
npm install
npm run dev
```

The server listens on `http://localhost:3000` by default. Endpoints are available under `/api/auth`.

### Available routes

| Method | Path           | Description                 |
|--------|----------------|-----------------------------|
| POST   | /api/auth/register | create a new user          |
| POST   | /api/auth/login    | authenticate and receive token |
| GET    | /api/auth/verify   | verify a JWT (requires `Authorization: Bearer <token>`) |

## Testing

See [docs/testing.md](docs/testing.md) for instructions on running and writing tests.

---

Feel free to extend this project with real persistence, configuration management, and error handling as appropriate for the team.
