//create node api 
let express = require('express'),
app = express(), //this is the express application
cors = require("cors"),
router = require('./router'),
bodyParser = require("body-parser"),
port = process.env.PORT || 9090,
root = __dirname+"/public";
global.__base = __dirname + '/';

app.locals.user = {Name:"FirstNAme", Age:"1000Yrs"};

app.use(cors());
app.use(express.static(root));//whatever static files needs to be sent to client will be served from root
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'200mb', extended:false}));

router.next("This is next format data");

app.use('/', router);

console.log("we are listening at", port);

app.listen(port);

console.log("we are printing global testname", global.testname);