let mysql = require('mysql');

createDBConnection = () => {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'breno',
        password: '',
        database: 'node_store_db'
    });
};

module.exports = () => {
    return createDBConnection;
};