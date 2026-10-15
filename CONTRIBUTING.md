# Contributing

Thanks for your interest in Faraz Market.

This repository is primarily maintained as a portfolio and active e-commerce project. Changes should be small, focused, documented, and tested before they are merged into `main`.

## Recommended workflow

1. Create a branch for the change.
2. Keep commits focused and use clear commit messages.
3. Never commit credentials, live customer data, backups, database dumps, or provider secrets.
4. Run the relevant local checks/build before opening a pull request.
5. Explain what changed, why it changed, and any deployment impact in the pull request.
6. Merge only after the branch has been reviewed and is safe for production-oriented use.

## Commit style

Prefer concise Conventional Commit-style messages, for example:

- `feat: add order tracking improvement`
- `fix: correct checkout validation`
- `docs: update Hostinger deployment guide`
- `chore: harden repository ignore rules`
- `refactor: simplify payment settings flow`

## Environment and secrets

Use `.env.example` for variable names and placeholders only. Real values belong in the hosting environment or another approved secret-management system.

## Pull requests

A good pull request should include:

- a clear title
- a short summary of the change
- testing/validation notes
- screenshots for meaningful visual changes when appropriate
- any database, environment-variable, payment, email, or deployment considerations

Do not include sensitive data in screenshots or logs.
