const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/hello', (request, response) => {
	response.render('index', {test: 'Bro'});
});

exports.app = functions.https.onRequest(app);