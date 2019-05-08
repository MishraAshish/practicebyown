let express = require('express');

//create an http server
http.createServer(function (request, response) {
   console.log("Request Is recived");

   response.writeHead(200,{'content-type':'text/html'});
   response.write('We are creating node server without express');
   response.end();

   console.log("Response Is sent");

}).listen(9090)

console.log("server is running at"+ 9090); //REPL