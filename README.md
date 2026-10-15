<div align="center">

<img src="./assets/faraz-market-banner.svg" alt="Faraz Market — Full-Stack E-Commerce Platform" width="100%" />

<br />

# Faraz Market

### Full-Stack E-Commerce Platform

A production-oriented e-commerce project built with **Next.js, React, TypeScript and MySQL**, with a complete customer storefront, administration system, checkout flow, SEO foundations and Hostinger deployment support.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-Production-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Hostinger](https://img.shields.io/badge/Deployment-Hostinger-673DE6?style=flat-square)](https://www.hostinger.com/)

**Live project:** [mydemosite.work](https://mydemosite.work/)

</div>

---

## Overview

Faraz Market is a full-stack online store designed around a real e-commerce workflow rather than a static storefront. The project includes customer authentication, product and category management, cart and checkout, order processing, coupons, refunds, email workflows, payment integrations, analytics, SEO controls and a configurable admin experience.

The repository is being synchronized from the latest reviewed **Hostinger + MySQL production package**. Sensitive runtime data, credentials, customer data and private backups are intentionally excluded from source control.

## Key Features

### Storefront
- Responsive product browsing and category navigation
- Product detail pages and shopping cart
- Checkout and order placement
- Coupon and promotional-code support
- Order tracking and order history
- Refund workflow support
- Gift-order and configurable store settings

### Authentication & Customer Accounts
- Sign up and sign in
- Email verification / OTP workflows
- Forgot-password and reset-password flows
- Customer account and order history
- Secure admin authentication

### Admin & CMS
- Product management
- Category, subcategory and nested-category management
- Order and customer management
- Coupon controls and expiry settings
- Refund-policy controls
- Homepage and storefront configuration
- Header, footer, hero and social-link controls
- Media and store settings management
- Email / SMTP configuration

### Payments & Commerce
The project architecture supports configurable commerce/payment flows, including integrations or workflows for:
- Safepay
- Payoneer
- Stripe-compatible payment handling
- Cash on Delivery
- Bank/manual payment workflows
- Payment callbacks and webhook handling

> Production merchant credentials are never committed to this repository.

## SEO & Indexing

The latest project update includes public-page indexing controls for the production domain:

- Public pages use `index, follow`
- Homepage canonical points to `https://mydemosite.work/`
- `robots.txt` allows public storefront crawling
- Private/admin/account/cart/checkout/order/API areas are excluded from crawler access where appropriate
- No application-level `X-Robots-Tag: noindex` is intended for public pages

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Database | MySQL |
| Database access | mysql2 / Drizzle-based tooling |
| Package manager | pnpm |
| Runtime | Node.js 24.x |
| Hosting target | Hostinger Node.js Web App |
| SEO | Metadata, canonical URLs, robots controls |
| Email | Configurable SMTP workflows |

## Database & Production Architecture

The production-oriented version uses **MySQL for persistent application data** instead of relying on a redeploy-sensitive local SQLite database. The migration preserves the store's core entities and workflows while supporting Hostinger deployment.

The reviewed package includes database migration tooling and covers data such as users, products, categories, customers, carts, orders, coupons, store settings, policies, authentication data and payment-related records.

## Deployment Profile

The project is prepared for Hostinger Node.js Web App deployment with the following baseline:

```text
Node.js: 24.x
Package manager: pnpm
Install: pnpm install --frozen-lockfile
Build: pnpm build
Start: pnpm start
Output: .next
```

Runtime credentials belong in environment variables and must never be committed.

## Security & Repository Hygiene

This repository intentionally excludes:

- `.env` and production environment files
- Database passwords and API keys
- Payment secrets and webhook secrets
- Private keys and certificates
- Customer/order exports
- `.fmbackup` migration backups
- Local database files
- Runtime store-data directories
- Dependency/build output such as `node_modules` and `.next`

An `.env.example` may be committed only with safe placeholders.

## Validation Status

The latest reviewed project package includes local validation for the Next.js production build and MySQL-backed workflows. MySQL/MariaDB compatibility and major store flows were checked in the project package; live Hostinger infrastructure, real merchant accounts and external email delivery still require environment-specific production verification.

## Project Status

**Active development / portfolio project.**

Current GitHub work is focused on keeping the repository clean, documented and safe for public portfolio use while synchronizing the latest production source package.

## Author

**Ahmad Faraz**  
Digital Growth · Web Design · SEO · Performance Marketing

GitHub: [@profaraz109](https://github.com/profaraz109)

---

### License

No open-source license is currently included. The repository is publicly visible for portfolio and project-review purposes; public visibility by itself does not grant additional reuse rights.
