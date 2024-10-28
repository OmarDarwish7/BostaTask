// db.js
const { Pool } = require('pg');
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

module.exports = pool;
