const configureDynamoDB = require('../config/dynamodb');
const UserService = require('../services/UserService');

/**
 * Example: UPDATE operation
 * Run with: npm run update
 */
const updateExample = async () => {
  try {
    console.log('🚀 Starting UPDATE example...\n');
    configureDynamoDB();

    // Get first user to update
    const users = await UserService.getAllUsers({ limit: 1 });
    
    if (users.length === 0) {
      console.log('ℹ️  No users found. Run "npm run create" first!');
      return;
    }

    const userId = users[0].userId;
    console.log(`Updating user: ${userId}\n`);

    // Show original user
    console.log('--- Original User ---');
    const originalUser = await UserService.getUserById(userId);
    console.log(JSON.stringify(originalUser, null, 2));

    // Update user
    console.log('\n--- Updating User ---');
    const updatedUser = await UserService.updateUser(userId, {
      name: `${originalUser.name} (Updated)`,
      status: 'active',
      age: (originalUser.age || 25) + 1,
    });

    console.log('\n📝 Updated User:');
    console.log(JSON.stringify(updatedUser, null, 2));

    console.log('\n✅ UPDATE example completed!');
  } catch (error) {
    console.error('❌ Error in UPDATE example:', error.message);
    process.exit(1);
  }
};

updateExample();
