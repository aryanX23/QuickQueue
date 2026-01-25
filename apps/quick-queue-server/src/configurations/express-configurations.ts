import express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from '@/utils/logger';

const setupExpress = () => {
  const app = express();

  // Morgan middleware: Stream HTTP logs to Winston
  const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
      stream: {
        write: (message) => logger.http(message.trim()),
      },
    }
  );
  app.set("trust proxy", true)
  app.use(morganMiddleware);

  app.use(express.json({ limit: '10mb', type: ['application/json', 'text/plain'] }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  app.use(helmet());

  // Health check
  app.get('/healthcheck', (_req, res) => {
    logger.info('Health check endpoint hit');
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  return app;
};

export { setupExpress };
