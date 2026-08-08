import type { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config/index.ts';

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: number;
        role: string;
      };
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const payload = jwt.verify(token, config.jwtSecret) as JwtPayload;
    req.auth = {
      userId: Number(payload.userId),
      role: String(payload.role ?? 'member')
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
