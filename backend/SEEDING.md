# Database Seeding Guide

This guide explains how to populate the PulsePlay CMS backend database with dummy data for local development, testing, or staging environments.

---

## Prerequisites

1. **Node.js & npm / yarn** installed.
2. **MongoDB** instance running locally or a remote MongoDB URI configured in `.env`.
3. Dependencies installed in the `backend` folder:
   ```bash
   cd backend
   npm install
   ```

---

## Configuration

Make sure your `backend/.env` file has the `MONGODB_URI` environment variable set:

```env
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.rm7pn.mongodb.net/production?retryWrites=true&w=majority
```

*(If `MONGODB_URI` is not specified, the seed script defaults to `mongodb://localhost:27017/pulseplay`)*

---

## Running the Seed Script

To seed the database with all collections and dummy data, run:

```bash
cd backend
npm run seed
```

Or using `ts-node` directly:
```bash
npx ts-node src/db/seed.ts
```

---

## Default User Credentials

The seed script creates the following default accounts with bcrypt-hashed passwords:

| Role | Username / Email | Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@pulseplaydigital.com` | `admin123` | All Roles & Modules |
| **Editor** | `editor@pulseplaydigital.com` | `editor123` | Blog, News, Resources, Testimonials |

---

## Seeded Data Entities

The seed script (`src/db/seed.ts`) populates the following collections with relational links:

1. **Team Categories**: Leadership, Engineering, Design & UX, Product & Strategy, Marketing & Growth.
2. **Team Members**: 6 comprehensive team member profiles with photos, social links, bio descriptions, skills, ratings, and contact info.
3. **Users**: Admin and Editor users linked to Team Members with full role privileges.
4. **Blog Categories & Blogs**: Articles with HTML content, tags, views count, SEO meta tags, and reader comments.
5. **Services**: 4 core digital agency services (Full-Stack Engineering, AI & Machine Learning, UI/UX Design Systems, Cloud DevOps) with SVGs and expert links.
6. **Solutions**: Enterprise Digital Core Transformation & Headless E-Commerce solutions.
7. **Work (Case Studies)**: FinFlow Global Banking, MediSync AI HealthTech, and AeroLogistics Supply Chain case studies with metrics and client themes.
8. **Homepage**: Featured portfolio projects on the home screen.
9. **KPIs**: 4 key performance indicators (e.g. 99.99% Cloud Uptime, 500+ Projects).
10. **Outcomes & Capabilities**: Impact statements and core technology capabilities.
11. **Products**: PulseCMS and PulseFlow AI product profiles with hero sections, screenshots, and key features.
12. **News & Press Releases**: Company milestones, award news, and product launches.
13. **Resources**: Whitepapers, case studies, and engineering guides with downloadable PDFs and topic tags.
14. **Careers & Applications**: Open job positions and sample candidate applications.
15. **Testimonials & Awards**: Client endorsements and industry awards (Webby, Awwwards).
16. **Brands & Advisors**: Partner brand logos and strategic board advisors.
17. **Inquiries**: Sample Contact Us and Hire Us form submissions.
18. **SEO Pages & Notifications**: Page meta titles and dashboard notification feeds.

---

## Troubleshooting

- **Connection Timeout**: Verify that your IP address is whitelisted in MongoDB Atlas Network Access if using cloud MongoDB.
- **Duplicate Key Error**: The script clears existing collections before inserting new data. If an index conflict occurs, drop the collection or database and re-run `npm run seed`.
