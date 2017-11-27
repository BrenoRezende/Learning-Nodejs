let express = require('express');
let load = require('express-load');

module.exports = () => {
    let app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {cwd: 'app'})
        .then('data')
        .then('services')
        .into(app);

    return app;
};