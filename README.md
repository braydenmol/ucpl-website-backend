# ucpl-website-backend

The backend for the University of Cincinnati Powerlifting Club web application.

## Foundation

This project is scaffolded as a TypeScript Express API with:
- SQLite database via Prisma ORM
- JWT authentication
- Swagger UI for API exploration
- Basic auth and health routes

## Setup

1. Copy `.env.example` to `.env`
2. Update `JWT_SECRET` and other values in `.env`
3. Run `npm install`
4. Run `npx prisma generate`
5. Run `npx prisma migrate dev --name init`
6. Start development server with `npm run dev`

## Local URLs

- API: `http://localhost:4000`
- Swagger UI: `http://localhost:4000/api-docs`
- Health check: `http://localhost:4000/health`
