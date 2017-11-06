var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/js',express.static(path.join(__dirname, 'public/scripts')));
app.use('/css',express.static(path.join(__dirname, 'public/styles')));

app.listen(8080, () => console.log('Example app listening on port 8080'))