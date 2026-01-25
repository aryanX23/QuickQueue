import dotenv from 'dotenv';
dotenv.config();

import { setupExpress } from '@/configurations/express-configurations';

const startServer = () => {
  const app = setupExpress();
  const port = process.env.PORT || 8000;
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  server.on('error', (error) => {
    console.error(error);
    process.exit(1);
  });

  process.on('SIGINT', () => {
    console.log('Server is shutting down...');
    server.close(() => {
      console.log('Server has been shut down');
      process.exit(0);
    });
  });

  process.on('SIGTERM', () => {
    console.log('Server is shutting down...');
    server.close(() => {
      console.log('Server has been shut down');
      process.exit(0);
    });
  });

  process.on('uncaughtException', (error) => {
    console.error(error);
    process.exit(1);
  });

  process.on('unhandledRejection', (error) => {
    console.error(error);
    process.exit(1);
  });

  return server;
};

startServer();
