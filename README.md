# DynamoDB CRUD POC

A proof of concept demonstrating different approaches to CRUD operations with DynamoDB, comparing implementations with and without Dynamoose ODM in TypeScript.

## Overview

This project showcases three different approaches to working with DynamoDB:

1. **Dynamoose ODM** - Object Document Mapping for DynamoDB with TypeScript support
2. **Raw AWS SDK** - Direct DynamoDB DocumentClient usage (coming soon)
3. **Performance Comparison** - Benchmarks between different approaches (coming soon)

## Prerequisites

- Node.js (v14 or higher)
- TypeScript (v5.2+)
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

4. **Build the TypeScript project**
   ```bash
   npm run build
   ```

5. **Run the application**
   ```bash
   npm start
   ```

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the main application (from dist/)
- `npm run dev` - Run with nodemon for development
- `npm run create` - Example: Create a new user
- `npm run read` - Example: Read/query users
- `npm run update` - Example: Update a user
- `npm run delete` - Example: Delete a user
- `npm run setup` - Create the DynamoDB table
- `npm run clean` - Clean the dist directory


## Implementation Approaches

### 1. Dynamoose ODM (Current Implementation)

**Type Safety**: Full TypeScript support with interfaces and type definitions
**Development Speed**: High-level abstraction simplifies development
**Features**: Built-in validation, schema enforcement, timestamps, and type conversion

## Key Differences & Considerations

### Dynamoose vs Raw AWS SDK

| Aspect | Dynamoose ODM | Raw AWS SDK |
|--------|---------------|-------------|
| **Type Safety** | Built-in TypeScript support | Manual interface definitions |
| **Development Speed** | Fast prototyping, less boilerplate | More verbose, full control |
| **Performance** | Slight overhead from abstraction | Minimal overhead, optimized |
| **Learning Curve** | Gentle, MongoDB-like syntax | Steeper, requires DynamoDB knowledge |
| **Features** | Validation, timestamps, schemas | Raw DynamoDB capabilities only |
| **Bundle Size** | ~200KB additional | ~50KB base AWS SDK |

### When to Use Each Approach

**Use Dynamoose when:**
- Rapid development is priority
- Team is familiar with ODM patterns
- Built-in validation and schemas are needed
- TypeScript support is important

**Use Raw AWS SDK when:**
- Maximum performance is critical
- Fine-grained control over DynamoDB operations is needed
- Bundle size needs to be minimal
- Complex DynamoDB operations are required

## Environment Configuration

The project supports both AWS DynamoDB and local development:

**AWS DynamoDB:**
```bash
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
DYNAMODB_TABLE_NAME=Users
```

**Local DynamoDB (Optional):**
```bash
DYNAMODB_ENDPOINT=http://localhost:8000
```

## Future Enhancements

- [ ] Add raw AWS SDK implementation
- [ ] Performance benchmarks and comparisons
- [ ] Unit tests for both implementations
- [ ] Integration tests with local DynamoDB
- [ ] Error handling improvements
- [ ] Connection pooling and optimization
- [ ] Advanced query examples

## Resources

- [Dynamoose Documentation](https://dynamoosejs.com/)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
- [AWS SDK v3 for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [DynamoDB Local Development Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)

## License

MIT
