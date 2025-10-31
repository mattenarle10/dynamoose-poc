import { configure } from '../config';
import { UserService } from '../service';

configure();

const run = async (): Promise<void> => {
  const users = await UserService.getAll({ limit: 20 });
  console.log(`Found ${users.length} users`);

  if (users.length > 0) {
    const user = await UserService.getById(users[0].userId);
    console.log('User:', user);
  }
};

run().catch(console.error);
