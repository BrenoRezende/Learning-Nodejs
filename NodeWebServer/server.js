const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + '/views/shared');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         title: 'Maintenance Page'
//     });
// });

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