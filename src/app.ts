import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { authRouter } from './routes/auth.ts';
import { healthRouter } from './routes/health.ts';
import { swaggerDocument } from './swagger.ts';
import { errorHandler } from './middleware/errorHandler.ts';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/health', healthRouter);
app.use('/auth', authRouter);
app.use(errorHandler);

export default app;
