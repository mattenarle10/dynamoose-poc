const configure = require('../config');
const UserService = require('../service');

configure();

const run = async () => {
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
