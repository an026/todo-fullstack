# 📝 Full-Stack Todo App (Next.js + Express + Supabase)

A full-stack Todo application built to practice authentication, backend APIs, and frontend integration.

This project demonstrates Google OAuth authentication using Supabase Auth, along with a custom Express backend API.

---

## 🚀 Tech Stack

### Frontend
- **Next.js** (App Router)
- **TypeScript**
- Supabase JS Client

### Backend
- **Express.js**
- Node.js

### Authentication & Database
- **Supabase**
  - Supabase Auth
  - PostgreSQL Database
  - Row-Level Security (RLS)
- **Google OAuth 2.0**
- **Google Cloud (OAuth Client Configuration)**

### Dev Tools
- Nodemon
- Concurrently

---

## 🔐 Authentication Flow

1. User clicks **Continue with Google**
2. Supabase redirects to Google OAuth
3. Google authenticates the user
4. Supabase creates a secure session (JWT)
5. Frontend reads the session and renders authenticated UI

Authentication is handled via:
- Supabase OAuth
- Google Cloud OAuth client credentials
- Secure redirect URIs
- Publishable API keys

---

## 📁 Project Structure

```
todo/
  client/   → Next.js frontend
  server/   → Express backend API
```

## 🔌 How It Works

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5001

## 📡 Example API Endpoint

```
GET /api/health
```

Response:

```json
{
  "ok": true
}
```