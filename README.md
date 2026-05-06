# Sales Manage Dashboard

Sales Manage Dashboard is a browser-based client onboarding and sales operations dashboard for managing product deployments, client records, proforma invoices, quotation workflows, and user-level access control.

The project is built as a lightweight front-end application using plain HTML, CSS, and JavaScript. It is designed for teams that want an operational dashboard without needing a heavy framework setup.

## What This Project Covers

- Client onboarding and deployment tracking
- Product-wise dashboard summaries
- Role-based login and user management
- Permission-based feature visibility
- Proforma invoice creation, preview, PDF download, and history
- Company-wise invoice branding and numbering
- Quotation request workflow with admin review and sales approval flow
- Branding controls for the dashboard logo

## Main Modules

### 1. Dashboard
- Business summary cards
- Product and status charts
- Quick operational visibility

### 2. Client Management
- View all clients
- Add new clients
- Update deployment status
- Manage client commercial details
- Billing-effective date tracking

### 3. User Access Control
- Create users
- Assign feature permissions
- Restrict feature visibility by user
- Admin-only controls for sensitive actions

### 4. Proforma Invoice
- Create new invoices for new clients
- Support multiple items/descriptions
- Company-based invoice presets
- Header, footer, signature, QR, and color configuration
- Saved invoice history grouped by financial year
- Read-only preview and PDF download

### 5. Quotation Module
- Sales quotation request submission
- Admin-managed dynamic quotation form builder
- PDF upload and review flow
- Sales approval or correction request flow
- Search, filters, status tracking, and notification counts

## Tech Stack

- `HTML`
- `CSS`
- `JavaScript`
- `localStorage` for browser-side persistence

## Project Structure

```text
index.html   - Dashboard markup and modal structure
styles.css   - Dashboard styling and responsive UI rules
app.js       - Application logic, data handling, auth, permissions, invoices, quotations
assets/      - Branding and image assets
```

## How To Run

This project is static and does not require a build step.

1. Clone the repository
2. Open `index.html` in a browser

If you host it on GitHub Pages or any static hosting service, the dashboard will run directly there as well.

## Important Notes

- This is currently a front-end driven dashboard.
- User authentication, permissions, invoices, quotations, and branding data are stored in the browser.
- That makes it useful for demos, internal controlled usage, and UI workflows, but it is not a secure server-backed production system yet.

## Recommended Next Improvements

- Move auth and data persistence to a backend
- Add secure file storage for uploaded PDFs and branding assets
- Replace browser-side permissions with server-side authorization
- Add audit logs and activity history
- Add export/reporting utilities

## Purpose

The goal of this project is to provide a practical operations dashboard for client onboarding, quotation handling, and invoice generation in a single interface, while keeping the experience simple enough to run as a static web app.
