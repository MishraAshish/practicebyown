//create node api 
let express = require('express');

//get, put, post, delete
let app = express(),
port = 9000;

//users
app.get("/users",function(request, response) {
   response.send("{'Name':'Jerry'},{'Name':'Andrew'},{'Name':'Bikram'},{'Name':'Reetu'}");
});

//gethelloworld
app.get("/hello",function(request, response) {
   response.send("<h2>Hello Synergistician's<h2/>");
});

app.get("*",function(request, response) {
   response.send("<h2>Site Under Construction<h2/>");
});

app.listen(port||8080);

// let server = app.listen(port, function () {
//    let host = server.address().address;
//    let port = server.address().port 
//    console.log("Example app listening at http://%s:%s", host, port);
// });

console.log("Example app listening at http://%s:%s", port);