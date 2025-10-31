import { configure } from '../config';
import { UserService } from '../service';

configure();

const run = async (): Promise<void> => {
  const user = await UserService.create({
    userId: `user-${Date.now()}`,
    email: `user${Date.now()}@example.com`,
    name: 'Alice Johnson',
    age: 28,
    status: 'active',
  });

  console.log('Created user:', user.userId);
};

run().catch(console.error);
