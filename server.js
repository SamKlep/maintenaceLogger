const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('api/hello', function (req, res){
    res.send('mp api route');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (request, response){
    response.sendFile(path.join(__dirname, 'build/index.html'))
});

app.listen(PORT, function () {
    console.log('server listening: ' + PORT)
});