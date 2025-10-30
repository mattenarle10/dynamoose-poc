const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema(
  {
    userId: {
      type: String,
      hashKey: true,
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
  },
  {
    timestamps: true,
  }
);

const User = dynamoose.model(
  process.env.DYNAMODB_TABLE_NAME || 'Users',
  schema
);

module.exports = User;
