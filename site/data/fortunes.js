var fortunes = [
    'Победи свои страхи, или они победят тебя.',
    'Рекам нужны истоки.',
    'Не бойся неведомого',
    'Тебя ждет приятный сюрприз',
    'Будь проще везде, где только можно'
];

exports.getRandom = function() {
    let random = Math.floor(Math.random() * fortunes.length);
    return fortunes[random];
};
