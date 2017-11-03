'use strict';

var http = require('http');

http.createServer((request, response) => {
  request.on('end',()=>{
    console.log('Request method: '+request.method);
    console.log('Request url: '+ request.url);
  })
    let fs = require('fs')
    fs.readFile('index.html', (err, data) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write(data);
        response.end();
    });
}).listen(8080);
// log message to Console
console.log('Server running at http://127.0.0.1:8080/');
// index.js
