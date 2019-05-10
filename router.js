//create a route
let express = require('express'),
router = express.Router({caseSensitive:true});
global.testname = 'TestName';

//casesensetive
router.get('/sendhtml', (req, res) => { 
    console.log("I am in routes from ", res); 
    
    //console.log("Response Object ", res);
    //console.log("Request Object ", req);
    //res.send("Hello World");
    
    res.sendfile('./index.html'); 
    
});

//Default call
router.get('*', (req, res) => { 
    console.log("I am in routes from ", res); 
    
    //console.log("Response Object ", res);
    //console.log("Request Object ", req);
    //res.send("Hello World");
    
    res.sendfile('./index.html'); 
    
});

router.next = function(data) {
    console.log(data);
};

module.exports = router;