import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const setupExpress = () => {
    const app = express();

    app.use(express.json({ limit: '10mb', type: ['application/json', 'text/plain'] }));
    app.use(express.urlencoded({ extended: true, limit: '10mb' }));

    app.use(
        cors({
          origin: true,
          credentials: true,
        }),
      );

    app.use(helmet());

    // Health check
    app.get('/healthcheck', (_req, res) => {
        res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
    });
    
    return app;
}

export { setupExpress }