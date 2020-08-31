const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Expres HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


// Routes
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Adan'
    });
});
app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});