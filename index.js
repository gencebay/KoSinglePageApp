var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5001));

app.use(express.static(__dirname + '/dist'));

app.get('/api/list', function(req, res){
    res.json({id: '1', message: 'Server json result'});
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

