let connectionFactory = require('../data/connectionFactory');

module.exports = (app) => {
    app.get('/product', (req, res) => {

        let connection = connectionFactory();

        connection.query('SELECT * FROM products', (err, results) => {
            res.render('product/index', {list: results});
        });

        connection.end();
    });
};