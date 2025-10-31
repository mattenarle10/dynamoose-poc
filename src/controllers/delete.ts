import { configure } from '../config';
import { UserService } from '../service';

configure();

const run = async (): Promise<void> => {
  const users = await UserService.getAll({ limit: 5 });

  if (users.length === 0) {
    console.log('No users found');
    return;
  }

  const userId = users[users.length - 1].userId;
  await UserService.delete(userId);
  console.log('Deleted:', userId);
};

run().catch(console.error);
