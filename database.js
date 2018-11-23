var mysql = require('mysql-node');

const dbConfig = new db({
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    host: config.db.host,
    port: config.db.port,
    max: config.db.max,
    idleTimeoutMillis: config.db.idleTimeoutMillis,
  });

  
  