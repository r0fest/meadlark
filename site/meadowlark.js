var express = require('express');

var app = express();

// Установка механизма представления handlebars
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// Пользовательская главная страница
app.get('/', function(req, res) {
    res.render('home');
});

// Пользовательская страница О...
var fortunes = {
    items: [
        'Победи свои страхи, или они победят тебя.',
        'Рекам нужны истоки.',
        'Не бойся неведомого',
        'Тебя ждет приятный сюрприз',
        'Будь проще везде, где только можно'
    ],
    getRandom() {
        let random = Math.floor(Math.random() * this.items.length);
        let result = this.items[random];
        return result;
    }
};
app.get('/about', function(req, res) {
    res.render('about', {fortune: fortunes.getRandom()});
});

// Пользовательская страница 404
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

// Пользовательская страница 500
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express server run');
});


