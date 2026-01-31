# Login System Backend

This is a simple Node.js backend for a login and signup system using MongoDB.

## Prerequisites

- Node.js (download from https://nodejs.org/)
- MongoDB (download from https://www.mongodb.com/try/download/community)

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Start MongoDB (run mongod in a terminal).

3. Start the server:
   ```
   npm start
   ```
   Or for development:
   ```
   npm run dev
   ```

The server will run on http://localhost:3000.

## API Endpoints

- POST /register: Register a new user with email and password.
- POST /login: Login with email and password.

## Connecting to Frontend

Update your HTML/JavaScript to send POST requests to these endpoints instead of using localStorage.

Example:
```javascript
// For register
fetch('http://localhost:3000/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});

// For login
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
```

## Troubleshooting

- If MongoDB connection fails, ensure MongoDB is running.
- Check console for errors.
- CORS is enabled, so frontend can be on different port.