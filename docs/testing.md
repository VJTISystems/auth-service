# Testing the Auth Service

This document outlines how to run and structure tests for the **auth-service** project. The service uses [Jest](https://jestjs.io/) and [SuperTest](https://github.com/visionmedia/supertest) for HTTP integration tests.

## Prerequisites

- Node.js (>=18 recommended) and npm installed.
- Dependencies installed via `npm install`.

## Running the test suite

```bash
npm install
npm test
```

The default `test` script runs Jest with coverage enabled. Coverage reports will be generated in the `coverage/` directory.

### Test structure

- Tests live under the `tests/` directory.
- Each file typically corresponds to a module or feature path, e.g. `auth.test.js`.
- Use `describe`/`it` blocks to group related assertions.
- Use SuperTest to exercise Express endpoints as shown in `tests/auth.test.js`.

## Writing new tests

1. Create a new file in `tests/` with a `.test.js` suffix.
2. Import the parts of the app you need, or spin up a fresh `express()` instance with routes.
3. Use Jest's mock capabilities for services or databases when needed.
4. Keep tests deterministic by resetting any in-memory state between runs.

## Continuous Integration tips

- Run `npm test` as part of your CI pipeline.
- Fail the build when coverage drops below agreed thresholds (configure in `jest.config.js`).

## Sample commands

```bash
# run a single test file
npm test -- tests/auth.test.js

# watch mode during development
npm test -- --watch
```

> **Note:** This project uses a simple in-memory model; for more realistic tests, replace with a mock database or stubbed persistence layer.
