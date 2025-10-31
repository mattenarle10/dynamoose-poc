import * as dynamoose from 'dynamoose';

export interface IUser {
  userId: string;
  email: string;
  name: string;
  age?: number;
  status?: 'active' | 'inactive' | 'pending';
  createdAt?: Date;
  updatedAt?: Date;
}

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

export const User = dynamoose.model(
  process.env.DYNAMODB_TABLE_NAME || 'Users',
  schema
);
