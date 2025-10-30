const configureDynamoDB = require('./config/dynamodb');
const UserService = require('./services/UserService');

/**
 * Main entry point demonstrating CRUD operations
 */
const main = async () => {
  try {
    console.log('🚀 Starting Dynamoose POC...\n');

    // Initialize DynamoDB connection
    configureDynamoDB();

    // Example: Create a user
    console.log('--- CREATE Operation ---');
    const newUser = await UserService.createUser({
      userId: 'user-001',
      email: 'john.doe@example.com',
      name: 'John Doe',
      age: 30,
      status: 'active',
    });
    console.log('Created user:', newUser);
    console.log();

    // Example: Read a user
    console.log('--- READ Operation ---');
    const user = await UserService.getUserById('user-001');
    console.log('Retrieved user:', user);
    console.log();

    // Example: Update a user
    console.log('--- UPDATE Operation ---');
    const updatedUser = await UserService.updateUser('user-001', {
      name: 'John Updated Doe',
      age: 31,
    });
    console.log('Updated user:', updatedUser);
    console.log();

    // Example: Get all users
    console.log('--- LIST Operation ---');
    const allUsers = await UserService.getAllUsers({ limit: 10 });
    console.log(`Total users found: ${allUsers.length}`);
    console.log();

    // Example: Delete a user (commented out to prevent deletion)
    // console.log('--- DELETE Operation ---');
    // await UserService.deleteUser('user-001');
    // console.log('User deleted');

    console.log('✅ All operations completed successfully!');
  } catch (error) {
    console.error('❌ Error in main:', error.message);
    process.exit(1);
  }
};

// Run the main function
if (require.main === module) {
  main();
}

module.exports = { main };
