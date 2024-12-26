# P-Setup

A robust and scalable Express.js application boilerplate with TypeScript, designed for production use.

## Features

- **Framework**: Express.js for fast and scalable server-side development.
- **TypeScript**: Fully typed and easy-to-maintain codebase.
- **Security**: Enhanced with `helmet` and `express-rate-limit`.
- **Database**: MongoDB integration using Mongoose.
- **Environment Configuration**: Manage configurations using `dotenv` and `dotenv-flow`.
- **Logging**: Comprehensive logging with `winston` and MongoDB transport.
- **Linting & Formatting**: Enforced code quality with ESLint and Prettier.
- **Commit Validation**: Pre-commit hooks using Husky and CommitLint.
- **Production-Ready**: PM2 for process management in production environments.

## Prerequisites

- **Node.js**: v16 or higher
- **npm**: v8 or higher
- **MongoDB**: Ensure a running MongoDB instance

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd p-setup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your configurations.

## Development

Run the app in development mode:
```bash
npm run dev
```

## Build

Compile TypeScript to JavaScript:
```bash
npm run build
```

## Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start:prod
   ```

## Linting & Formatting

- Check code quality:
  ```bash
  npm run lint
  ```
- Fix linting issues:
  ```bash
  npm run lint:fix
  ```
- Check formatting:
  ```bash
  npm run format:check
  ```
- Fix formatting:
  ```bash
  npm run format:fix
  ```

## Project Structure

```
project-folder/
├── src/
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # Application routes
│   ├── utils/          # Utility functions
│   └── index.ts        # Entry point
├── .env                # Environment variables
├── package.json        # Project metadata
└── ecosystem.config.js # PM2 configuration
```

## Tools & Libraries

- **Express.js**: Backend framework
- **TypeScript**: Static type checking
- **Mongoose**: MongoDB ODM
- **Helmet**: Security headers
- **Morgan & Winston**: Request and application logging
- **Prettier & ESLint**: Code formatting and linting

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

## License

This project is licensed under the ISC License.

---

Built with ❤️ by Mohit Dheer.

