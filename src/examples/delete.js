const configureDynamoDB = require('../config/dynamodb');
const UserService = require('../services/UserService');

/**
 * Example: DELETE operation
 * Run with: npm run delete
 */
const deleteExample = async () => {
  try {
    console.log('🚀 Starting DELETE example...\n');
    configureDynamoDB();

    // Get users
    const users = await UserService.getAllUsers({ limit: 5 });
    
    if (users.length === 0) {
      console.log('ℹ️  No users found to delete. Run "npm run create" first!');
      return;
    }

    console.log(`Found ${users.length} user(s)\n`);

    // Delete the last user (to keep some data)
    const userToDelete = users[users.length - 1];
    const userId = userToDelete.userId;

    console.log('--- User to Delete ---');
    console.log(JSON.stringify(userToDelete, null, 2));

    console.log(`\n🗑️  Deleting user: ${userId}...`);
    await UserService.deleteUser(userId);

    // Verify deletion
    console.log('\n--- Verifying Deletion ---');
    try {
      await UserService.getUserById(userId);
      console.log('⚠️  User still exists (unexpected)');
    } catch (error) {
      if (error.message.includes('not found')) {
        console.log('✅ User successfully deleted!');
      } else {
        throw error;
      }
    }

    // Show remaining users
    const remainingUsers = await UserService.getAllUsers({ limit: 10 });
    console.log(`\n📋 Remaining users: ${remainingUsers.length}`);

    console.log('\n✅ DELETE example completed!');
  } catch (error) {
    console.error('❌ Error in DELETE example:', error.message);
    process.exit(1);
  }
};

deleteExample();
