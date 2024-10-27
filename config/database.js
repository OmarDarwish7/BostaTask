// config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgresql://bosta-task-db_owner:d3f8CTLhKRbP@ep-withered-credit-a2rdp1gy.eu-central-1.aws.neon.tech/bosta-task-db?sslmode=require', {
  dialect: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

export default sequelize; // Export the sequelize instance
