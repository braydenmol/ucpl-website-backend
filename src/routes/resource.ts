import { Router } from 'express';
import { createHandler, getByIdHandler, listHandler, type ModelName } from '../controllers/resourceController.js';

export function createResourceRouter(modelName: ModelName) {
  const router = Router();

  router.get('/', listHandler(modelName));
  router.get('/:id', getByIdHandler(modelName));
  router.post('/', createHandler(modelName));

  return router;
}
