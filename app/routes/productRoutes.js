module.exports = (app) => {
    app.get('/product', (req, res) => {

        let connection = app.data.connectionFactory();
        var productServices = new app.services.ProductServices(connection); 

        productServices.getAll()
            .then((products) => res.render('product/index', { list: products }))
            .catch(err => console.log(`Erro ao acessar banco de dados: ${err}`));

        connection.end();
    });
};