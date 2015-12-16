var fs = require('fs');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5001));

app.use(express.static(__dirname + '/dist'));

app.get('/api/items', function(req, res){
    var obj;
    fs.readFile(__dirname + '/data/data.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
    });
    res.json(obj);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

