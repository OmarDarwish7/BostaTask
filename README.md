# Library Management System

## Overview

This project is a simple Library Management System designed to manage books and borrowers efficiently. It provides functionalities to add, update, delete, and search for books and borrowers, as well as manage the borrowing process.

## Table of Contents

- [Objectives](#objectives)
- [Functional Requirements](#functional-requirements)
  - [Books](#books)
  - [Borrowers](#borrowers)
  - [Borrowing Process](#borrowing-process)
- [Non-functional Requirements](#non-functional-requirements)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Books

- **Add a Book**: Allow users to add a book with details such as title, author, ISBN, available quantity, and shelf location.
- **Update a Book**: Enable users to update existing book details.
- **Delete a Book**: Allow users to delete a book from the system.
- **List All Books**: Provide functionality to list all books in the library.
- **Search for a Book**: Enable users to search for a book by title, author, or ISBN.

### Borrowers

- **Register a Borrower**: Allow users to register a borrower with details like name, email, and registered date.
- **Update Borrower’s Details**: Enable users to update borrower information.
- **Delete a Borrower**: Allow users to delete a borrower from the system.
- **List All Borrowers**: Provide functionality to list all registered borrowers.

### Borrowing Process

- **Check Out a Book**: A borrower can check out a book. The system will track which books are checked out and by whom.
- **Return a Book**: A borrower can return a book that they have checked out.
- **Check Current Borrowed Books**: A borrower can view the books they currently have.
- **Track Due Dates**: The system will keep track of due dates for borrowed books and list books that are overdue.

## Technologies Used

- **Node.js**: For the backend server.
- **Express.js**: For building the RESTful API.
- **Sequelize**: For interacting with the PostgreSQL database.
- **PostgreSQL**: As the database management system.
- **dotenv**: For managing environment variables.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd library-management-system
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Create an .env File**:

   Create a `.env` file in the root directory and add your database connection details:

   ```
   DATABASE_URL=your_database_connection_string
   ```

4. **Run Database Migrations**:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the Application**:

   ```bash
   npm run dev
   ```

## Usage

- The API endpoints can be accessed via `http://localhost:3000`.
- Use tools like Postman or cURL to interact with the API and test its functionalities.

## Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
