const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Breno',
        likes: [
            'Games',
            'Cities'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to fulfill the request.'
    });
});

app.listen(3000);