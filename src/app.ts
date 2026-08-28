import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { authRouter } from './routes/auth.js';
import { healthRouter } from './routes/health.js';
import { createResourceRouter } from './routes/resource.js';
import { swaggerDocument } from './swagger.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/health', healthRouter);
app.use('/auth', authRouter);
app.use('/users', createResourceRouter('user'));
app.use('/members', createResourceRouter('member'));
app.use('/events', createResourceRouter('event'));
app.use('/news', createResourceRouter('news'));
app.use('/gallery-items', createResourceRouter('galleryItem'));
app.use('/records', createResourceRouter('record'));
app.use(errorHandler);

export default app;
