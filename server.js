//create node api 
let express = require('express'),
app = express(),
router = require('./router'),
port = process.env.PORT || 9090,
root = __dirname+"/public";
global.__base = __dirname + '/';

app.use(express.static(root));//whatever static files needs to be sent to client will be served from root

//express.json({limit:'200mb', extended:false});

router.next("This is next format data");

app.use('/', router);

console.log("we are listening at", port);

app.listen(port);

console.log("we are printing global testname", global.testname);