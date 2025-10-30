const dynamoose = require('dynamoose');
require('dotenv').config();

/**
 * Configure DynamoDB connection
 * Uses AWS SDK credentials from environment variables or AWS credentials file
 */
const configureDynamoDB = () => {
  // Configure AWS region
  dynamoose.aws.sdk.config.update({
    region: process.env.AWS_REGION || 'us-east-1',
  });

  // If using local DynamoDB, configure the endpoint
  if (process.env.DYNAMODB_ENDPOINT) {
    dynamoose.aws.ddb.local(process.env.DYNAMODB_ENDPOINT);
    console.log(`🔧 Using local DynamoDB at ${process.env.DYNAMODB_ENDPOINT}`);
  } else {
    console.log(`🌍 Using AWS DynamoDB in region: ${process.env.AWS_REGION || 'us-east-1'}`);
  }

  // Configure Dynamoose settings
  dynamoose.model.defaults.set({
    create: false, // Don't auto-create tables
    waitForActive: false, // Don't wait for table to be active
  });

  return dynamoose;
};

module.exports = configureDynamoDB;
