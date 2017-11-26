module.exports = (app) => {
    app.get('/product', (req, res) => {

        let connection = app.data.connectionFactory();

        connection.query('SELECT * FROM products', (err, results) => {
            res.render('product/index', {list: results});
        });

        connection.end();
    });
};