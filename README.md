# Data Analytics Dashboard

A full-stack data analytics dashboard built to visualize sample business data including revenue, sales, and profits across categories over time.

## Project Overview

This project consists of:
- **Frontend**: A React application set up with Vite, showcasing 5 different beautiful responsive charts using Recharts. It uses Tailwind CSS for modern styling and layout logic.
- **Backend**: A Node.js and Express RESTful API providing data to the dashboard, powered by a MongoDB database.
- **Authentication**: JWT-based login and registration system protecting the API and UI routes.

## Tech Stack Used

- **Frontend**: React.js, React Router, TailwindCSS, Recharts, Lucide React, Axios, Vite.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JSON Web Tokens (JWT), bcryptjs for password hashing.
- **Tools**: dotenv for environment configuration.

## API Endpoints List

### Authentication Paths
- `POST /api/auth/register` - Registers a new user and returns a JWT
- `POST /api/auth/login` - Authenticates an existing user and returns a JWT

### Data Paths
- `GET /api/data` - Fetches data records for the analytics dashboard. Protected by JWT.
  - **Query Parameters**:
    - `category`: Filter by category (e.g. Electronics, Clothing)
    - `status`: Filter by order status (e.g. Pending, Completed)
    - `startDate`: Filter records after a specific date
    - `endDate`: Filter records before a specific date

## Database Schema

### User Model
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, required, hashed)
- Timestamps automatically generated (`createdAt`, `updatedAt`)

### DataRecord Model
- `date` (Date, required)
- `category` (String, required, enum)
- `status` (String, required, enum)
- `revenue` (Number, required)
- `sales` (Number, required)
- `productsSold` (Number, required)
- `profit` (Number, required)
- `customers` (Number, required)
- Timestamps automatically generated (`createdAt`, `updatedAt`)

## Steps to Run the Project locally

### 1. Prerequisites
- Node.js installed
- MongoDB connection string (or running locally)

### 2. Backend Setup
1. CD into the backend `cd backend`
2. Install dependencies `npm install`
3. Edit the `.env` file and replace `MONGODB_URI` with your own Atlas connection string if it's not present already.
4. Run the seed script to populate sample data: `node seed.js`
5. Start the backend DEV server: `npm run dev` (API will run at http://localhost:5000)

### 3. Frontend Setup
1. Open a new terminal and CD into the frontend `cd frontend`
2. Install dependencies `npm install`
3. Start the dev server `npm run dev` (Application will run at http://localhost:5173)

### Dashboard Screenshots
*(Add screenshots of your dashboard views here by dragging and dropping them from your browser after you run the frontend.)*
