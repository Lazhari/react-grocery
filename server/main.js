'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.render('./../app/index.ejs');
});
app.use(express.static(__dirname + '/../tmp'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(7777);
require('./routes/items')(app);
