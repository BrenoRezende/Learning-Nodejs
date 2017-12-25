const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/shared');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        message: 'A sample text'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to fulfill the request.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on the port 3000');
});