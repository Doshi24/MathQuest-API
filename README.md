# MathQuest-API

This is a full-stack web application that allows users to play a simple math game. The game consists of three stages: addition, subtraction, and a number guessing game. The user's name is saved to a database before starting the game.

## Project Structure

The project is divided into two main parts:

- `client`: A React-based frontend that provides the user interface for the game.
- `server`: A Node.js and Express-based backend that handles the game logic and database interactions.

## Frontend (Client)

### Description

The frontend is built with React and Vite. It uses `react-router-dom` for routing and `tailwindcss` for styling. The application consists of two main components:

- `Form.jsx`: A form to enter the user's name.
- `MathQuest.jsx`: The main game component where the user solves math problems.

### Dependencies

- `@tailwindcss/vite`: ^4.1.13
- `react`: ^19.1.1
- `react-dom`: ^19.1.1
- `react-router-dom`: ^7.8.2
- `tailwindcss`: ^4.1.13

### Dev Dependencies

- `@eslint/js`: ^9.33.0
- `@types/react`: ^19.1.10
- `@types/react-dom`: ^19.1.7
- `@vitejs/plugin-react`: ^5.0.0
- `eslint`: ^9.33.0
- `eslint-plugin-react-hooks`: ^5.2.0
- `eslint-plugin-react-refresh`: ^0.4.20
- `globals`: ^16.3.0
- `vite`: ^7.1.2

### Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `lint`: Lints the code.
- `preview`: Previews the production build.

## Backend (Server)

### Description

The backend is built with Node.js and Express. It uses a MySQL database to store user names. The game logic is handled by the `game.controller.js` and the database interactions are handled by the `savename.controller.js`.

### Dependencies

- `cors`: ^2.8.5
- `dotenv`: ^17.2.2
- `express`: ^5.1.0
- `mysql2`: ^3.14.5
- `nodemon`: ^3.1.10
- `npm`: ^11.6.0

### Scripts

- `start`: Starts the server with `nodemon`.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- A MySQL database.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/MathQuest-API.git
   ```

2. **Install frontend dependencies:**

   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   cd ../server
   npm install
   ```

4. **Configure the backend:**

   - Create a `.env` file in the `server` directory.
   - Add the following environment variables to the `.env` file:

     ```
     DB_HOST=your-database-host
     DB_USER=your-database-user
     DB_PASSWORD=your-database-password
     DB_NAME=your-database-name
     DB_PORT=your-database-port
     CONNECTIONLIMIT=10
     QUEUELIMIT=0
     PORT=3000
     ```

### Running the application

1. **Start the backend server:**

   ```bash
   cd server
   npm start
   ```

2. **Start the frontend development server:**

   ```bash
   cd ../client
   npm run dev
   ```

The application will be available at `http://localhost:5173`.
