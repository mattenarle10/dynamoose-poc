const configure = require('./config');
const UserService = require('./service');

configure();

const run = async () => {
  const users = await UserService.getAll({ limit: 1 });

  if (users.length === 0) {
    console.log('No users found');
    return;
  }

  const userId = users[0].userId;
  const updated = await UserService.update(userId, {
    name: `${users[0].name} (Updated)`,
    age: (users[0].age || 25) + 1,
  });

  console.log('Updated:', updated.userId);
};

run().catch(console.error);
