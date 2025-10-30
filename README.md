# Dynamoose POC

A proof of concept demonstrating CRUD operations with DynamoDB using Dynamoose ODM.

## 📋 Prerequisites

- Node.js (v14 or higher)
- AWS Account with DynamoDB access
- AWS credentials configured

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dynamoose-poc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your AWS credentials
   ```

4. **Run the application**
   ```bash
   npm start
   ```

## 📚 Available Scripts

- `npm start` - Run the main application
- `npm run dev` - Run with nodemon for development
- `npm run create` - Example: Create a new user
- `npm run read` - Example: Read/query users
- `npm run update` - Example: Update a user
- `npm run delete` - Example: Delete a user
- `npm run setup` - Create the DynamoDB table

## 🗂️ Project Structure

```
dynamoose-poc/
├── src/
│   ├── config/          # Configuration files
│   ├── models/          # Dynamoose models
│   ├── services/        # CRUD service layer
│   ├── examples/        # Usage examples
│   ├── setup/           # Setup scripts
│   └── index.js         # Main entry point
├── .env.example         # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## 🔧 CRUD Operations

### Create
```javascript
const user = await UserService.createUser({
  userId: '123',
  email: 'user@example.com',
  name: 'John Doe'
});
```

### Read
```javascript
const user = await UserService.getUserById('123');
const allUsers = await UserService.getAllUsers();
```

### Update
```javascript
const updated = await UserService.updateUser('123', {
  name: 'Jane Doe'
});
```

### Delete
```javascript
await UserService.deleteUser('123');
```

## 🔗 Resources

- [Dynamoose Documentation](https://dynamoosejs.com/)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)

## 📝 License

MIT
