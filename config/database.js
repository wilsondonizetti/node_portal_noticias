var mysql = require('mysql');
var conn = function () {    
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'portal_noticias'
    });

    return connection;
}
module.exports = function () {    
    return conn;
}