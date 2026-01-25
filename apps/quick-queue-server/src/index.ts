import dotenv from 'dotenv';
dotenv.config();

import { setupExpress } from '@/configurations/express-configurations';

const startServer = async () => {
    const app = setupExpress();
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
