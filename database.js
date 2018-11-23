var mysql = require('mysql');

Host = '',
Database = '',
User = '',
Password = '';

var User,
Password,
Host,
Database,
Port;

var con = mysql.createConnection({
  host: Host,
  user: User,
  password: Password,
  database: Database,
});

con.connect(function (err) {
if (!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});

  module.exports = {
    User,
    Password,
    Host,
    Database,
    Port,
    mysql,
    con,
  }