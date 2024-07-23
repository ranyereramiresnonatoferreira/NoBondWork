const { Pool } = require('pg');

const pool = new Pool({
    user: 'fbpxyzav',
    host: 'drona.db.elephantsql.com',
    database: 'fbpxyzav',
    password: 'MQdhcDK3GDBDh_KcCnBvPwTT_LGnekVT',
    port: 5432, // Porta padrão para PostgreSQL
});

module.exports = pool;