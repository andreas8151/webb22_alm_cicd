webb22_alm_cicd
Group examination in Application Lifecycle Management
This is a project generated with Express using the EJS view engine template and enhanced with ESLint, Husky, and npm test with pre-commit hook. The project is a calculator API with two endpoints: /add/:param1&:param2 for addition and /sub/:param1&:param2 for subtraction.

Prerequisites
Make sure you have the following dependencies installed before running the project:

Node.js (version 18.16.0)
Getting Started
To get started with the project, follow the steps below:

Clone the repository:

git clone (https://github.com/andreas8151/webb22_alm_cicd)

Navigate to the project directory:

cd WEBB22_ALM_CICD

Install the project dependencies:

npm install

Start the development server:

npm start

The server will be running at http://localhost:3000/

Endpoints
The following endpoints are available in the project:
GET /add/:param1&:param2: Adds param1 and param2 and returns the result.
GET /sub/:param1&:param2: Subtracts param2 from param1 and returns the result.

The param1 and param2 are placeholders for the actual numbers you want to calculate.

Scripts
The following scripts are available in the project:

start: Starts the development server.
eslint: Runs ESLint to analyze and enforce code style.
lint-fix: Runs ESLint and attempts to automatically fix code style issues.
test: Runs the tests for the project.

ESLint
ESLint is a JavaScript linter that enforces code style and catches potential issues. It helps maintain consistent and high-quality code throughout the project. The ESLint configuration for this project can be found in the .eslintrc.yml file.

To run ESLint manually, use the following command:

npm run eslint

To automatically fix ESLint issues, use the following command:

npm run lint-fix

Husky and npm test
Husky is used to add Git hooks to the project. A pre-commit hook is configured to run npm test, which executes the tests for the project before committing changes.
