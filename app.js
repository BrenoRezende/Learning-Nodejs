let app = require('./config/express'); 

let homeRoutes = require('./app/routes/homeRoutes')(app); 
let productRoutes = require('./app/routes/productRoutes')(app);

let port = 3000;
app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});