module.exports = (app) => {
    app.get('/product', (req, res) => {
        let mysql = require('mysql');
        let connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'breno',
            password: '',
            database: 'node_store_db'
        });

        connection.query('SELECT * FROM products', (err, results) => {
            res.render('product/index', {list: results});
        });

        connection.end();
    });
};