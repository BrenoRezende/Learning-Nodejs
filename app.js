let app = require('./config/express')(); 

let port = 3000;
app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});