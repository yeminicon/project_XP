import type { Request } from 'express';
import { User } from './users/entities/user.entity';

export type dbConfigs = {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
};

declare global {
  interface AuthRequest extends Request {
    user: User;
  }
}
