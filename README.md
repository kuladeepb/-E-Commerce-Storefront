# ⚡ NexStore — Full-Stack MERN E-Commerce

A production-quality e-commerce storefront built with MongoDB Atlas, Express.js, React.js, and Node.js.

## ✨ Features

- **JWT Authentication** — Register, login, and secure token-based sessions
- **Role-Based Access Control** — Admin and User roles with route protection
- **Product Catalog** — Full CRUD, search, filter by category/price/rating, pagination
- **Shopping Cart** — Context API, persisted to localStorage, qty controls
- **Multi-Step Checkout** — Shipping → Payment → Review → Order placement
- **Order History** — Track all past orders with status updates
- **Product Reviews** — Star ratings and comments from verified users
- **Admin Dashboard** — Revenue stats, order management, product CRUD, user management
- **Responsive Design** — Mobile-first dark glassmorphism UI

---

## 🗂️ Project Structure

```
project-3/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/generateToken.js
│   ├── seeder.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── context/
│       ├── pages/
│       │   └── admin/
│       ├── App.jsx
│       └── index.css
└── README.md
```

---

## 🚀 Setup Instructions

### 1. MongoDB Atlas

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com) and create a free cluster
2. Create a database user and whitelist your IP (or use `0.0.0.0/0` for development)
3. Copy the connection string (replace `<password>` with your user's password)

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment
# Edit .env and replace MONGO_URI with your Atlas connection string:
# MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/nexstore?retryWrites=true&w=majority

# Seed the database with sample products and users
npm run seed

# Start the backend server
npm run dev
# → Server running on http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies (already done if you followed the build)
npm install

# Start the dev server
npm run dev
# → App running on http://localhost:5173
```

---

## 🔑 Default Credentials (after seeding)

| Role  | Email                 | Password   |
|-------|-----------------------|------------|
| Admin | admin@store.com       | admin123   |
| User  | john@example.com      | john123    |
| User  | jane@example.com      | jane123    |

> The login page also has quick-fill demo buttons.

---

## 📡 API Reference

### Auth — `/api/auth`
| Method | Endpoint       | Access  |
|--------|----------------|---------|
| POST   | /register      | Public  |
| POST   | /login         | Public  |
| GET    | /me            | Private |
| PUT    | /me            | Private |

### Products — `/api/products`
| Method | Endpoint            | Access  |
|--------|---------------------|---------|
| GET    | /                   | Public  |
| GET    | /featured           | Public  |
| GET    | /:id                | Public  |
| POST   | /                   | Admin   |
| PUT    | /:id                | Admin   |
| DELETE | /:id                | Admin   |
| POST   | /:id/reviews        | Private |

### Orders — `/api/orders`
| Method | Endpoint         | Access  |
|--------|------------------|---------|
| POST   | /                | Private |
| GET    | /myorders        | Private |
| GET    | /:id             | Private |
| GET    | /                | Admin   |
| GET    | /stats           | Admin   |
| PUT    | /:id/status      | Admin   |

### Users — `/api/users`
| Method | Endpoint | Access |
|--------|----------|--------|
| GET    | /        | Admin  |
| GET    | /stats   | Admin  |
| GET    | /:id     | Admin  |
| PUT    | /:id     | Admin  |
| DELETE | /:id     | Admin  |

---

## 🗃️ Database Schemas

### User
`name`, `email`, `password` (bcrypt), `role` (user/admin), `avatar`, `address`

### Product
`name`, `description`, `price`, `category`, `brand`, `stock`, `images[]`, `reviews[]`, `rating`, `numReviews`, `isFeatured`, `discount`

### Order
`user`, `orderItems[]`, `shippingAddress`, `paymentMethod`, `itemsPrice`, `shippingPrice`, `taxPrice`, `totalPrice`, `isPaid`, `isDelivered`, `status`

---

## 🛠️ Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | React 18, Vite, React Router v6, Axios, Context API |
| Backend   | Node.js, Express.js (MVC)          |
| Database  | MongoDB Atlas + Mongoose           |
| Auth      | JWT + bcryptjs                     |
| Styling   | Vanilla CSS (dark glassmorphism)   |

---

## 📜 Seeder Commands

```bash
npm run seed          # Import sample data
npm run seed:destroy  # Delete all data
```
