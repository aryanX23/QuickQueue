# @repo/types

Shared TypeScript types and interfaces for QuickQueue monorepo.

## Purpose

This package provides type-safe communication between frontend and backend by sharing:

- User types
- API request/response types
- Queue-related types
- Error types

## Usage

### In Backend (Express)

```typescript
import type { User, ApiResponse, LoginRequest } from "@repo/types";

app.post("/api/login", (req, res) => {
  const credentials: LoginRequest = req.body;

  const response: ApiResponse<User> = {
    success: true,
    data: {
      id: "123",
      username: "john",
      email: "john@example.com",
    },
  };

  res.json(response);
});
```

### In Frontend (React)

```typescript
import type { User, ApiResponse } from "@repo/types";

const fetchUser = async (): Promise<User> => {
  const response = await fetch("/api/user");
  const data: ApiResponse<User> = await response.json();
  return data.data!;
};
```

## Benefits

- **Type Safety**: Changing a type in one place updates everywhere
- **Autocomplete**: Full IntelliSense support across apps
- **Compile-Time Errors**: Frontend fails to build if backend changes break the contract
- **Single Source of Truth**: No more out-of-sync API types
