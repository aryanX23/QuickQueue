// User-related types
export interface User {
  id: string;
  username: string;
  email?: string;
  createdAt?: Date;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Authentication types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

// Queue-related types (for QuickQueue app)
export interface QueueItem {
  id: string;
  userId: string;
  position: number;
  status: "waiting" | "active" | "completed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

export interface Queue {
  id: string;
  name: string;
  description?: string;
  items: QueueItem[];
  maxSize?: number;
  isActive: boolean;
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
