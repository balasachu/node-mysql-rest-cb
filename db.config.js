const mysql = require('mysql')
var dbConfig = {
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"nodedb"
}
var dbConnect = mysql.createPool(dbConfig);
module.exports = dbConnect