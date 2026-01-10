import express from 'express';
import cors from 'cors';
import type { User, ApiResponse, LoginRequest, LoginResponse } from '@repo/types';

const app = express();
const port = 8000;

app.use(
  cors({
    origin: 'http://localhost:5173', // Allow your React app's origin
  })
);
app.use(express.json());

// Example: Get user endpoint using shared types
app.get('/api/user/:id', (req, res) => {
  // This uses the shared User type from @repo/types
  const user: User = {
    id: req.params.id,
    username: 'john_doe',
    email: 'john@example.com',
    createdAt: new Date(),
  };

  const response: ApiResponse<User> = {
    success: true,
    data: user,
    message: 'User fetched successfully',
  };

  res.json(response);
});

// Example: Login endpoint using shared types
app.post('/api/login', (req, res) => {
  const credentials: LoginRequest = req.body;

  // Mock authentication
  const user: User = {
    id: '123',
    username: 'john_doe',
    email: credentials.email,
    createdAt: new Date(),
  };

  const response: ApiResponse<LoginResponse> = {
    success: true,
    data: {
      token: 'mock-jwt-token-12345',
      user,
    },
    message: 'Login successful',
  };

  res.json(response);
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello from QuickQueue Backend!' });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
