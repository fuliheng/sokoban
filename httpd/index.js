'use strict';

var http = require('http');

http.createServer((request, response) => {
  let fs = require('fs');
  let postData = '';
  request.on('data',(chunk) =>{
    postData += chunk;
    console.log(
      '接收的POST DATA 片段Ｋ：['+chunk+'].'
    );
});
  request.on('end',()=>{
    switch(request.url){
      case '/':
        fs.readFile('../htdocs/index.html',(err,data)=>{
          if(err){
            consloe.log('檔案讀取錯誤');
          }
          else{
            response.writeHead(200,{
              'Content-Type':'text/html'
            });
          response.write(data);
          response.end();
        }
      });
      break;
      case '/assets/css/styles.css':
        fs.readFile('../htdocs/assets/css/styles.css',(err,data)=>{
          if(err){
            consloe.log('檔案讀取錯誤');
          }
          else{
            response.writeHead(200,{
              'Content-Type':'text/css'
            });
          response.write(data);
          response.end();
        }
      });
      break;
      case '/assets/png/SokobanClone_byVellidragon.png':
        fs.readFile('../htdocs/assets/png/SokobanClone_byVellidragon.png',(err,data)=>{
          if(err){
            consloe.log('檔案讀取錯誤');
          }
          else{
            response.writeHead(200,{
              'Content-Type':'image/png'
            });
          response.write(data);
          response.end();
        }
      });
      break;
    default:
    console.log('未定義的存取：'+request.url);
    response.end();
      break;
    }
  });
}).listen(8080);
// log message to Console
console.log('Server running at http://127.0.0.1:8080/');
// index.js
