// config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

export default sequelize; // Export the sequelize instance
