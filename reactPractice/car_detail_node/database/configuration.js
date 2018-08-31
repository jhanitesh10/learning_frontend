const Promise = require('bluebird'),
      mysql = require('mysql'),
      using = Promise.using;
      Promise.promisifyAll(require("mysql/lib/Connection").prototype);
      Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const confidential = require('../confidential/data.js'),
      DB_HOST = confidential.DB_HOST,
      DB_USER = confidential.DB_USER,
      DB_PASS = confidential.DB_PASS,
      DB_NAME = confidential.DB_NAME,
      DB_PORT = confidential.DB_PORT;

let pool = mysql.createPool({
  connectionLimit : 4,
  connectTimeout : 5000,
  acquireTimeout : 4000,
  charset: "utf8mb4_unicode_ci",
  host : DB_HOST,
  user : DB_USER,
  password : DB_PASS,
  database : DB_NAME,
  port : DB_PORT
});


let getConnection = () => {

  return pool.getConnectionAsync().disposer((connection) => {
    return connection.release();
  });

}

let getQuery = ({sqlQuery, paramr}) => {

  return using(getConnection(), (connection) => {

    if( typeof paramr !== 'undefined'){
      return Promise.resolve( connection.queryAsync(sqlQuery, paramr) );
    } else {
      return Promise.resolve( connection.queryAsync(sqlQuery, paramr) );
    }

  });

}


module.exports = {
  getConnection : getConnection,
  getQuery : getQuery
}
