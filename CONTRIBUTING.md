# Contributing to Dynamoose POC

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

### Prerequisites
- Node.js v14 or higher
- Docker (optional, for local DynamoDB)
- AWS account (for production testing)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dynamoose-poc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up local DynamoDB (recommended for development)**
   ```bash
   # Start DynamoDB Local with Docker
   docker-compose up -d
   
   # Use the local environment configuration
   cp .env.local.example .env
   
   # Create the table
   npm run setup
   ```

4. **Run examples**
   ```bash
   npm run create  # Create sample users
   npm run read    # Read users
   npm run update  # Update a user
   npm run delete  # Delete a user
   ```

## Project Structure

```
dynamoose-poc/
├── src/
│   ├── config/          # DynamoDB configuration
│   ├── models/          # Data models (schemas)
│   ├── services/        # Business logic layer
│   ├── examples/        # Usage examples
│   ├── setup/           # Setup and initialization scripts
│   └── index.js         # Main entry point
├── docker-compose.yml   # Local DynamoDB setup
├── package.json
└── README.md
```

## Coding Guidelines

- Use ES6+ features
- Follow existing code style and patterns
- Add JSDoc comments for functions
- Include error handling in all async operations
- Use descriptive variable and function names

## Making Changes

1. Create a new branch for your feature/fix
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test thoroughly

3. Commit with clear, descriptive messages
   ```bash
   git commit -m "Add feature: description of what you added"
   ```

4. Push to your fork and create a Pull Request

## Testing

Before submitting a PR, ensure:
- All examples run without errors
- Code follows the project's style guide
- New features include usage examples
- Documentation is updated if needed

## Questions?

Feel free to open an issue for any questions or concerns!
