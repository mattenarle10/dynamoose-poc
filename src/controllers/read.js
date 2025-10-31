const configure = require('../config');
const UserService = require('../service');

configure();

const run = async () => {
  const users = await UserService.getAll({ limit: 20 });
  console.log(`Found ${users.length} users`);

  if (users.length > 0) {
    const user = await UserService.getById(users[0].userId);
    console.log('User:', user);
  }
};

run().catch(console.error);
