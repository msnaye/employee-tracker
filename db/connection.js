const mysql = require('mysql2');

// connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'love1spell87',
    database: 'employee'
  });