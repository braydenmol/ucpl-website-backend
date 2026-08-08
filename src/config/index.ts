import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT ?? 4000),
  jwtSecret: process.env.JWT_SECRET ?? 'replace-with-secure-secret',
  databaseUrl: process.env.DATABASE_URL ?? 'file:./dev.db'
};
