import type { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma/client.js';

export type ModelName = 'user' | 'member' | 'event' | 'news' | 'galleryItem' | 'record';

function getModel(modelName: ModelName) {
  const model = prisma[modelName as keyof typeof prisma] as any;

  if (!model) {
    throw new Error(`Unsupported model: ${modelName}`);
  }

  return model;
}

export function listHandler(modelName: ModelName) {
  return async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await getModel(modelName).findMany();
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  };
}

export function getByIdHandler(modelName: ModelName) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);

      if (!Number.isInteger(id)) {
        return res.status(400).json({ message: 'Invalid id format.' });
      }

      const item = await getModel(modelName).findUnique({
        where: { id }
      });

      if (!item) {
        return res.status(404).json({ message: `${modelName} not found.` });
      }

      return res.status(200).json(item);
    } catch (error) {
      return next(error);
    }
  };
}

export function createHandler(modelName: ModelName) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = await getModel(modelName).create({
        data: req.body
      });

      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  };
}
