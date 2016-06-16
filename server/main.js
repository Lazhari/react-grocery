'use strict';

const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.render('./../app/index.ejs');
});
app.use(express.static(__dirname + '/../tmp'));
app.listen(7777);
