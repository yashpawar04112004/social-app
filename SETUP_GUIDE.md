# Social Media App - Full Stack Setup Guide

## Project Overview

This is a complete full-stack social media application with:
- **Backend**: Node.js + Express + MongoDB with MVC architecture
- **Frontend**: React with functional components, hooks, and Axios
- **Features**: Authentication, Posts, Likes, Comments

## Directory Structure

```
social-app/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   ├── middleware/
│   │   └── auth.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── SignupPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── FeedPage.jsx
│   │   ├── components/
│   │   │   ├── PostCard.jsx
│   │   │   └── CreatePostForm.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── auth.css
│   │   │   ├── feed.css
│   │   │   └── components.css
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── .env
├── server.js (Main backend entry point)
├── .env (Backend environment variables)
└── package.json (Root for backend dependencies)
```

## Prerequisites

- Node.js v14+ installed
- MongoDB running locally (or MongoDos Atlas connection string)
- npm or yarn package manager

## Installation

### Step 1: Setup Backend

```bash
# Navigate to project root
cd social-app

# Backend dependencies already listed in package.json
# If not installed, run:
npm install

# Or if using backend folder:
cd backend
npm install
cd ..
```

### Step 2: Setup Frontend

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Return to root
cd ..
```

## Running the Application

### Terminal 1: Start MongoDB

```bash
# Windows
mongod --dbpath "C:\data\db"

# Mac/Linux
mongod --dbpath /data/db
```

### Terminal 2: Start Backend Server

```bash
# From root directory
node server.js

# Or
npm start
```

Output should show:
```
✅ Server running on port 5000
✅ MongoDB connected successfully
```

### Terminal 3: Start Frontend

```bash
# Navigate to frontend folder
cd frontend

# Start React development server
npm start
```

The app will open at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id/like` - Like/unlike post
- `POST /api/posts/:id/comment` - Add comment

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/social-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Testing the Application

### 1. Signup
- Go to http://localhost:3000/signup
- Enter username, email, and password
- Click "Sign Up"

### 2. Login
- Go to http://localhost:3000/login
- Enter email and password
- Click "Login"

### 3. Create a Post
- After login, you're on the Feed page
- Enter post text in "Create a Post" form
- Optionally add an image URL
- Click "Post" button

### 4. Like and Comment
- Click "❤️ Like" button on any post
- Click "💬 Comment" to expand comments
- Add a comment and click "Post"

## Code Features

### Backend
- ✅ MVC Architecture (Models, Controllers, Routes)
- ✅ JWT Authentication with middleware
- ✅ bcrypt Password hashing
- ✅ MongoDB with Mongoose ODM
- ✅ Error handling and validation
- ✅ CORS enabled

### Frontend
- ✅ Functional components with Hooks
- ✅ React Router for navigation
- ✅ Axios with interceptors for API calls
- ✅ localStorage for JWT token persistence
- ✅ Responsive CSS design
- ✅ Loading states and error handling
- ✅ Clean, readable code

## Development Workflow

### Backend Development
1. Modify files in `backend/` folder
2. Restart `node server.js` to apply changes
3. Use `nodemon` for auto-restart:
   ```bash
   npm install -g nodemon
   nodemon server.js
   ```

### Frontend Development
1. React dev server auto-refreshes on file changes
2. Edit files in `frontend/src/` folder
3. Changes appear immediately in browser

## Troubleshooting

### Backend Issues

**MongoDB Connection Error**
- Ensure MongoDB is running: `mongod --version`
- Check MongoDB service is started
- Verify connection string in .env

**Port 5000 Already in Use**
- Kill existing process: `taskkill /F /IM node.exe`
- Or change PORT in .env

**Module Not Found**
- Run `npm install` in project root
- Delete `node_modules` and reinstall

### Frontend Issues

**Cannot Connect to Backend**
- Ensure backend is running on port 5000
- Check REACT_APP_API_URL in .env
- Verify CORS is enabled in backend

**localhost:3000 Not Opening**
- React dev server may be starting
- Check terminal for errors
- Try manual navigation to http://localhost:3000

**401 Unauthorized**
- Token may have expired
- Try logging out and logging back in
- Clear localStorage and restart

## Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
```

Generates optimized production build in `frontend/build/`

### Deploy Options
- **Frontend**: Netlify, Vercel, GitHub Pages, AWS S3
- **Backend**: Heroku, Railway, Render, AWS EC2
- **Database**: MongoDB Atlas, AWS RDS

## Next Steps

1. Customize styling with your own colors/fonts
2. Add edit/delete post functionality
3. Implement user profiles
4. Add follow/unfollow feature
5. Deploy to production
6. Add real-time updates with WebSockets

## Support

Check individual README files:
- Backend: [backend folder]/README.md
- Frontend: [frontend folder]/README.md

Enjoy building! 🚀
