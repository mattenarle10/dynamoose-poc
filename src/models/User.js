const dynamoose = require('dynamoose');

/**
 * User Schema Definition
 * Defines the structure of the User model in DynamoDB
 */
const userSchema = new dynamoose.Schema(
  {
    userId: {
      type: String,
      hashKey: true, // Partition key
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: {
        name: 'EmailIndex',
        type: 'global',
      },
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'pending'],
      default: 'active',
    },
    createdAt: {
      type: Date,
      default: () => new Date(),
    },
    updatedAt: {
      type: Date,
      default: () => new Date(),
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

// Create the model
const User = dynamoose.model(
  process.env.DYNAMODB_TABLE_NAME || 'Users',
  userSchema
);

module.exports = User;
