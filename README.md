# QuickQueue 🏥

QuickQueue is a real-time clinic management and queuing system designed to streamline the patient experience for small clinics. It bridges the gap between physical waiting rooms and digital convenience, allowing doctors to manage queues efficiently while patients can join remotely or via QR codes.

**Status**: Active Development  
**Architecture**: Monorepo (Turborepo)

---

## 🎯 Project Vision

### The Real-World Use Case

A doctor runs a busy clinic with no receptionist. Patients arrive and crowd the waiting area, unsure of their turn. QuickQueue solves this by:

- **For Doctors**: Providing a simple dashboard to "Open/Close" the queue and call the next patient.
- **For Patients**: Allowing them to scan a QR code at the shop (or use a remote link) to join the queue and track their status live on their phone.

---

## 🛠 Tech Stack

This project is built as a **TypeScript Monorepo** to ensure type safety across the entire stack (Frontend ↔ Backend).

- **Monorepo Tool**: Turborepo
- **Package Manager**: Yarn
- **Languages**: TypeScript, JavaScript
- **Frontend**: React 19, Vite
- **Backend**: Node.js, Express
- **Shared Packages**: Custom shared types (`@repo/types`) and Prettier config

---

## 📂 Repository Structure

```
.
├── apps/
│   ├── quick-queue-ui/      # Frontend Application (Vite + React)
│   └── quick-queue-server/  # Backend API (Express + Node.js)
├── packages/
│   ├── types/               # Shared TypeScript definitions (User, API Responses)
│   └── prettier-config/     # Shared formatting rules
├── turbo.json               # Turborepo pipeline configuration
└── package.json             # Root dependencies and scripts
```

---

## ✨ Key Features (Implemented)

- **Type-Safe Communication**: Both the frontend and backend share the exact same interface definitions via `@repo/types`. If the API response shape changes, the frontend build fails immediately (Compile-time safety).
- **Unified Development**: Run both the React UI and the Express Server with a single command.
- **Hot Module Replacement**: Vite HMR for the UI and Nodemon for the backend server.

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aryanX23/QuickQueue.git
cd QuickQueue
```

2. Install dependencies (Root):

```bash
yarn install
```

### Running the Project

To start both the UI and the Server simultaneously:

```bash
yarn dev
```

- **Frontend**: Runs on http://localhost:5173
- **Backend**: Runs on http://localhost:8000

### Building for Production

To build all apps and packages:

```bash
yarn build
```

---

## 🧪 Development Commands

These commands can be run from the root:

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `yarn dev`         | Starts all apps in development mode               |
| `yarn build`       | Builds all apps and packages                      |
| `yarn lint`        | Runs ESLint across all workspaces                 |
| `yarn format`      | Formats code using Prettier                       |
| `yarn check-types` | Runs TypeScript type checking across the monorepo |

---

## 🤝 Contributing

1. Fork the repo.
2. Create a new feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
