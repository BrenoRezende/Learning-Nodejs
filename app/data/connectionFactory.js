let mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'breno',
        password: '',
        database: 'node_store_db'
    });
};