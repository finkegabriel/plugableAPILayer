var mysql = require('mysql');
var passport = require('passport');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

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

var options ={
  host: Host,
  user: User,
  password: Password,
  database: Database,
};

var sessionStore = new MySQLStore(options);

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
    sessionStore,
  }
