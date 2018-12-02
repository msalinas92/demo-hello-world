var express = require('express');
var app = express();

app.get('/v1/hello/world', function (req, res) {
    res.status(200).json({ 'message' : 'helloworld' });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
