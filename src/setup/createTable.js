const configureDynamoDB = require('../config/dynamodb');
const User = require('../models/User');

/**
 * Script to create the DynamoDB table
 * Run with: npm run setup
 */
const createTable = async () => {
  try {
    console.log('🚀 Initializing DynamoDB connection...');
    configureDynamoDB();

    console.log('📊 Creating table...');
    await User.table.create();

    console.log('✅ Table created successfully!');
    console.log(`   Table name: ${process.env.DYNAMODB_TABLE_NAME || 'Users'}`);
  } catch (error) {
    if (error.code === 'ResourceInUseException') {
      console.log('ℹ️  Table already exists');
    } else {
      console.error('❌ Error creating table:', error.message);
      throw error;
    }
  }
};

// Run the script
createTable()
  .then(() => {
    console.log('🎉 Setup complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  });
