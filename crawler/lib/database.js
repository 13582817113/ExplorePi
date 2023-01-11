var mysql = require('mysql');
const DataConnection = mysql.createPool({
    connectionLimit : 100,
    host     : process.env["DB_HOST"],
    user     : process.env["DB_USERNAME"],
    password : process.env["DB_PASSWORD"],
    database : process.env["DB_DATABASE"],
    // @ts-ignore
    port: process.env["DB_PORT"]
});
function getConnection(callback) {
    DataConnection.getConnection(function(err, connection) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        callback(err, connection);
        }
    )
}
function ex_sql(sql){
    getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(sql, function (error, results, fields) {
          connection.release();
          if (error) throw error;
          return results
        });
      });
}

 module.exports = { getConnection,ex_sql };