import * as dotenv from 'dotenv';

dotenv.config();

export const configure = (): void => {
  // Configure AWS region for DynamoDB
  process.env.AWS_REGION = process.env.AWS_REGION || 'us-east-1';
  
  console.log('Configured AWS region:', process.env.AWS_REGION);
};
