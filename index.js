var connect = require('connect')
var http = require('http')

var app = connect()

// gzip/deflate outgoing responses
var compression = require('compression')
app.use(compression())

// store session state in browser cookie
var cookieSession = require('cookie-session')
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}))

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

app.use(connect.directory('./dist'));

app.use(function middleware1(req, res, next) {
    // middleware 1
    next();
});
app.use(function middleware2(req, res, next) {
    // middleware 2
    next();
});

app.use('/foo', function fooMiddleware(req, res, next) {
    // req.url starts with "/foo"
    next();
});

app.use(function onerror(err, req, res, next) {
    // an error occurred!
});

//create node.js http server and listen on port
http.createServer(app).listen(5001)