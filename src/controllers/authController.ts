import type { Request, Response, NextFunction } from 'express';
import { authenticateUser, registerUser } from '../services/authService.ts';

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, fullName } = req.body;
    const user = await registerUser(email, password, fullName);

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role }
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const token = await authenticateUser(email, password);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}
