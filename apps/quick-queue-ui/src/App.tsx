import { useState } from 'react';
import type { User, ApiResponse } from '@repo/types';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Example: Fetch user from backend using shared types
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/user/123');
      const data: ApiResponse<User> = await response.json();

      if (data.success && data.data) {
        setUser(data.data);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript Monorepo</h1>

      {/* Example: Using shared types */}
      <div className="card" style={{ marginBottom: '1rem' }}>
        <button onClick={fetchUser} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch User from Backend'}
        </button>
        {user && (
          <div style={{ marginTop: '1rem', textAlign: 'left' }}>
            <p>
              <strong>User Data (Type-Safe!):</strong>
            </p>
            <pre style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px' }}>
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
