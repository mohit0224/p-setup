# Production-Ready-Setup (Boilerplate)

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
   git clone https://github.com/mohit0224/p-setup.git
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

Create a `.env.development` file in the root directory with the necessary environment variables. You can use the `.env.example` file as a reference:
```bash
cp .env.example .env.development
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

Create a `.env.production` file in the root directory with the necessary environment variables. You can use the `.env.example` file as a reference:
```bash
cp .env.example .env.production
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
├── .husky/                # Husky configuration for Git hooks
├── docker/                # Docker-related files
├── logs/                  # Log files
├── nginx/                 # Nginx configuration
├── public/                # Public assets
├── script/                # Scripts for various tasks
├── src/                   # Source code
│   ├── configs/           # Configuration files
│   ├── constant/          # Constant values
│   ├── controllers/       # Request handlers
│   ├── database/          # Database-related code
│   ├── middlewares/       # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # Application routes
│   ├── services/          # Business logic
│   ├── templates/         # Template files
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   ├── app.ts             # Main application file
│   └── index.ts           # Entry point
├── test/                  # Test files
├── .env.example           # Example environment variables file
├── .gitignore             # Git ignore file
├── .prettierignore        # Files to ignore by Prettier
├── .prettierrc            # Prettier configuration
├── commitlint.config.js   # Commitlint configuration
├── package.json           # Project metadata
├── ecosystem.config.js    # PM2 configuration
├── eslint.config.mjs      # ESLint configuration
├── nodemon.json           # Nodemon configuration
├── package-lock.json      # Lockfile for npm dependencies
├── readme.md              # Readme file
└── tsconfig.json          # TypeScript configuration
```

## Tools & Libraries

- **Express.js**: Backend framework
- **TypeScript**: Static type checking
- **Mongoose**: MongoDB ODM
- **Helmet**: Security headers
- **Morgan & Winston**: Request and application logging
- **Prettier & ESLint**: Code formatting and linting

## Routes

The application has the following routes defined in `src/app.ts`:

1. `/api/v1/logs` - Handles requests related to logs. This route accepts a body parameter environment which should be either development or production. All logs are saved in MongoDB, and this route allows you to retrieve logs based on the specified environment.

2. `/api/v1/health` - Handles requests related to health checks.


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

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin&style=flat)](https://www.linkedin.com/in/mohit-dheer/)
