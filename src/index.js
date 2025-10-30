const configure = require('./config');
const UserService = require('./service');

const main = async () => {
  console.log('Starting Dynamoose POC\n');
  configure();

  const newUser = await UserService.create({
    userId: 'user-001',
    email: 'john@example.com',
    name: 'John Doe',
    age: 30,
    status: 'active',
  });
  console.log('Created:', newUser.userId);

  const user = await UserService.getById('user-001');
  console.log('Retrieved:', user.name);

  const updated = await UserService.update('user-001', {
    name: 'John Updated',
    age: 31,
  });
  console.log('Updated:', updated.name);

  const allUsers = await UserService.getAll({ limit: 10 });
  console.log('Total users:', allUsers.length);

  console.log('\nComplete');
};

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };
