let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home/index');
});

let port = 3000;
app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});