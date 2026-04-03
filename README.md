# Social App Backend

A Node.js + Express backend for a social media application with MVC architecture.

## Features

- User authentication with JWT
- Password hashing with bcrypt
- MongoDB database with Mongoose
- CRUD operations for posts
- Like and comment functionality

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcrypt** - Password hashing

## Project Structure

```
backend/
├── controllers/
│   ├── authController.js
│   └── postController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Post.js
├── routes/
│   ├── auth.js
│   └── posts.js
└── package.json

server.js
.env
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=mongodb://localhost:27017/social-app
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=5000
   ```
4. Make sure MongoDB is running locally
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Posts
- `POST /api/posts` - Create a new post (requires auth)
- `GET /api/posts` - Get all posts (requires auth)
- `PUT /api/posts/:id/like` - Like/unlike a post (requires auth)
- `POST /api/posts/:id/comment` - Add comment to a post (requires auth)

## Request/Response Examples

### Signup
```json
POST /api/auth/signup
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Post
```json
POST /api/posts
Authorization: Bearer <token>
{
  "text": "Hello world!",
  "image": "https://example.com/image.jpg" // optional
}
```

### Like Post
```json
PUT /api/posts/:id/like
Authorization: Bearer <token>
```

### Add Comment
```json
POST /api/posts/:id/comment
Authorization: Bearer <token>
{
  "text": "Nice post!"
}
```