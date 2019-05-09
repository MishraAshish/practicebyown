//create node api 
let express = require('express');

let mainApp = express(),
admin = express(),
subModule = express()
port = 9000;

//users
admin.get("/",function(request, response) {
   console.log("We are in Admin Users ",admin.mountpath);
   response.send("{'Name':'Jerry'},{'Name':'Andrew'},{'Name':'Bikram'},{'Name':'Reetu'}");
});

admin.get("/students",function(request, response) {
   console.log("We are in Admin Users ",admin.mountpath);
   response.send("Students are upto date : 'Jerry','Andrew','Bikram','Reetu'");
});

//gethelloworld
subModule.get("/",function(request, response) {
   console.log("We are in Submodule Users ",subModule.mountpath);
   response.send("<h2>Hello Synergistician's<h2/>");
});

subModule.get("/hello",function(request, response) {
   console.log("We are in Submodule Users ",subModule.mountpath);
   response.send("<h2>Hello From Submodule<h2/>");
});

admin.use("/submodule",subModule);
mainApp.use(['/admin', '/manager'], admin)

mainApp.get("*",function(request, response) {
   response.send("<h2>Site Under Construction<h2/>");
});

mainApp.listen(port||8080);
console.log("Example app listening at http://localhost:", port);