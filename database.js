var mysql = require('mysql');

var User,
Password,
Host,
Database,
Port  ;

const dbConfig = {
    user: User,
    password: Password,
    database: Database,
    host: Host,
    port: Port,
  };

  var con = mysql.createConnection({
    host: Host,
    user: User,
    password: Password,
    database: Database,
  });

  module.exports = {
    User,
    Password,
    Host,
    Database,
    Port,
  }
