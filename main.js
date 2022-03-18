var http = require('http')
var url = require('url')
var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'node.js',
    password: '123456',
    database: 'chulbong'
});
db.connect();

var app = http.createServer(function(request, response){
    var _url = request.url;
    if(_url == '/') {
        db.query('SELECT * FROM items', function(error, items){
            if (error) {
                throw error;
            }
            console.log(items);
            response.writeHead(200);
            response.end("Success");
        })
    }
});
app.listen(3000);
