import { User } from './model';

export interface IUser {
  userId: string;
  email: string;
  name: string;
  age?: number;
  status?: 'active' | 'inactive' | 'pending';
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserService {
  static async create(userData: Omit<IUser, 'createdAt' | 'updatedAt'>): Promise<any> {
    const user = new User(userData);
    return await user.save();
  }

  static async getById(userId: string): Promise<any> {
    const user = await User.get(userId);
    if (!user) throw new Error(`User ${userId} not found`);
    return user;
  }

  static async getAll(options: { limit?: number } = {}): Promise<any[]> {
    const { limit = 10 } = options;
    return await User.scan().limit(limit).exec();
  }

  static async getByEmail(email: string): Promise<any[]> {
    return await User.query('email').eq(email).using('EmailIndex').exec();
  }

  static async update(userId: string, updates: Partial<Omit<IUser, 'userId' | 'createdAt' | 'updatedAt'>>): Promise<any> {
    const user = await User.get(userId);
    if (!user) throw new Error(`User ${userId} not found`);
    return await User.update({ userId }, updates);
  }

  static async delete(userId: string): Promise<void> {
    await User.delete(userId);
  }
}
