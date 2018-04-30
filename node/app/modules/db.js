var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 5,
  host            : 'mysql',
  user            : 'root',
  password        : process.env.MYSQL_ROOT_PASSWORD,
  database        : 'db_' + process.env.NODE_ENV,
  charset         : 'utf8_general_ci',
});

module.exports = pool;
