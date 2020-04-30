const express = require('express');
const exphbs = require('express-handlebars');

const port = 9000;

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about', {page_title: "About Page"});
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});