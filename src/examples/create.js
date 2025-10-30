const configureDynamoDB = require('../config/dynamodb');
const UserService = require('../services/UserService');

/**
 * Example: CREATE operation
 * Run with: npm run create
 */
const createExample = async () => {
  try {
    console.log('🚀 Starting CREATE example...\n');
    configureDynamoDB();

    // Create a single user
    const user = await UserService.createUser({
      userId: `user-${Date.now()}`,
      email: `user${Date.now()}@example.com`,
      name: 'Alice Johnson',
      age: 28,
      status: 'active',
    });

    console.log('\n📦 Created User:');
    console.log(JSON.stringify(user, null, 2));

    // Batch create multiple users
    console.log('\n--- Batch Create Example ---');
    const timestamp = Date.now();
    const users = await UserService.batchCreateUsers([
      {
        userId: `user-${timestamp}-1`,
        email: `bob${timestamp}@example.com`,
        name: 'Bob Smith',
        age: 35,
        status: 'active',
      },
      {
        userId: `user-${timestamp}-2`,
        email: `charlie${timestamp}@example.com`,
        name: 'Charlie Brown',
        age: 42,
        status: 'pending',
      },
    ]);

    console.log(`\n📦 Batch Created ${users.length} Users`);
    console.log('✅ CREATE example completed!');
  } catch (error) {
    console.error('❌ Error in CREATE example:', error.message);
    process.exit(1);
  }
};

createExample();
