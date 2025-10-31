const configure = require('../config');
const UserService = require('../service');

configure();

const run = async () => {
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
