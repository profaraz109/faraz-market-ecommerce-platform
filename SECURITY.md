# Security Policy

Faraz Market is a public portfolio repository for a production-oriented e-commerce application. Please do not publish credentials, customer data, payment secrets, database exports, backup files, or private configuration in issues, pull requests, commits, or screenshots.

## Sensitive data that must never be committed

- `.env` files and production environment variables
- MySQL usernames, passwords, database dumps, or live connection strings
- `SETTINGS_KEY` and `SETUP_TOKEN`
- Safepay, Payoneer, Stripe, SMTP, or other provider credentials
- `.fmbackup` store migration files
- customer, order, refund, or authentication exports
- private keys, certificates, and webhook secrets
- production upload/runtime data

Use `.env.example` only as a safe placeholder template.

## Reporting a security issue

If you discover a vulnerability, do not open a public issue containing exploit details or secrets. Contact the repository owner privately through the contact method listed on the GitHub profile and include only the information needed to reproduce the problem safely.

## Production note

Deployment credentials and merchant settings are supplied through the hosting environment and are intentionally excluded from source control. Before production launch, environment-specific checks should be completed for database access, email delivery, payment callbacks/webhooks, authentication, backups, and HTTPS/domain configuration.
