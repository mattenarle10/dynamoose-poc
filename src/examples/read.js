const configureDynamoDB = require('../config/dynamodb');
const UserService = require('../services/UserService');

/**
 * Example: READ operations
 * Run with: npm run read
 */
const readExample = async () => {
  try {
    console.log('🚀 Starting READ example...\n');
    configureDynamoDB();

    // Get all users
    console.log('--- Get All Users ---');
    const allUsers = await UserService.getAllUsers({ limit: 20 });
    console.log(`\n📋 Total users found: ${allUsers.length}`);
    
    if (allUsers.length > 0) {
      console.log('\nFirst user:');
      console.log(JSON.stringify(allUsers[0], null, 2));

      // Get user by ID
      console.log('\n--- Get User By ID ---');
      const userId = allUsers[0].userId;
      const user = await UserService.getUserById(userId);
      console.log('\n👤 User details:');
      console.log(JSON.stringify(user, null, 2));

      // Query by email
      console.log('\n--- Query User By Email ---');
      const email = allUsers[0].email;
      const usersByEmail = await UserService.getUserByEmail(email);
      console.log(`\n📧 Users with email ${email}:`);
      console.log(JSON.stringify(usersByEmail, null, 2));
    } else {
      console.log('\nℹ️  No users found. Run "npm run create" first!');
    }

    console.log('\n✅ READ example completed!');
  } catch (error) {
    console.error('❌ Error in READ example:', error.message);
    if (error.message.includes('not found')) {
      console.log('\nℹ️  Tip: Make sure to create some users first with "npm run create"');
    }
    process.exit(1);
  }
};

readExample();
