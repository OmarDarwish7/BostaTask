// db.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://bosta-task-db_owner:d3f8CTLhKRbP@ep-withered-credit-a2rdp1gy.eu-central-1.aws.neon.tech/bosta-task-db?sslmode=require',
});

module.exports = pool;
