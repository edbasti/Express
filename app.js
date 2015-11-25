var express = require('express');
var app = express();
/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
*/
var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
	password: 'root',
    database: 'test'
});

console.log('MySQL Connection details  '+connection);

http.createServer(function (request, response) 
{ 
        console.log('Creating the http server');
        connection.query('SELECT field_id, field1, field2 FROM table1', function(err, rows, fields)
        {
                console.log('Connection result error '+err);
                console.log('no of records is '+rows.length);
                response.writeHead(200, { 'Content-Type': 'application/json'});
                response.end(JSON.stringify(rows));
                response.end();
        }); 

}).listen(3000);