# Dynamoose POC

A proof of concept demonstrating CRUD operations with DynamoDB using Dynamoose ODM.

## Prerequisites

- Node.js (v14 or higher)
- AWS Account with DynamoDB access
- AWS credentials configured

## Getting Started

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

## Available Scripts

- `npm start` - Run the main application
- `npm run dev` - Run with nodemon for development
- `npm run create` - Example: Create a new user
- `npm run read` - Example: Read/query users
- `npm run update` - Example: Update a user
- `npm run delete` - Example: Delete a user
- `npm run setup` - Create the DynamoDB table

## Project Structure

```
dynamoose-poc/
├── src/
│   ├── config.js        # DynamoDB configuration
│   ├── model.js         # User model
│   ├── service.js       # CRUD operations
│   ├── index.js         # Main entry
│   ├── create.js        # Create example
│   ├── read.js          # Read example
│   ├── update.js        # Update example
│   ├── delete.js        # Delete example
│   └── setup.js         # Setup script
├── .env.example
├── package.json
└── README.md
```

## CRUD Operations

### Create
```javascript
const user = await UserService.create({
  userId: '123',
  email: 'user@example.com',
  name: 'John Doe'
});
```

### Read
```javascript
const user = await UserService.getById('123');
const allUsers = await UserService.getAll();
```

### Update
```javascript
const updated = await UserService.update('123', {
  name: 'Jane Doe'
});
```

### Delete
```javascript
await UserService.delete('123');
```

## Resources

- [Dynamoose Documentation](https://dynamoosejs.com/)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)

## License

MIT
