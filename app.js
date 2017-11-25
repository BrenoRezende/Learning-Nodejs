let app = require('./config/express'); 

let homeRoutes = require('./app/routes/home-routes')(app); 
let productRoutes = require('./app/routes/product-routes')(app);

let port = 3000;
app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});