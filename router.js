//create a route
let express = require('express'),
router = express.Router({caseSensitive:true});
global.testname = 'TestName';

//get put post delete patch, all- //put, post, get, delete, patch : crud

router.get('/userDetails', (req, res) => { 
    let name = "Bikram";

    //console.log(req.params);
    //console.log(typeof req.params.id);

    console.log(req.query.id);

    if (parseInt(req.params.id) === 2 || parseInt(req.query.id) == 2) {
        name = "Jerry"
    }

    res.send('Name Is : '+ name);    
});

router.get('/username/:id', (req, res) => { 
    let name = "Bikram";

    console.log(req.params);
    console.log(typeof req.params.id);  

    if (req.params && parseInt(req.params.id) === 2) {
        name = "Jerry"
    }

    res.send('Name Is : '+ name);    
});


router.all('/sendhtml', (req, res) => { 
    //console.log("I am in routes from ", res); 
    
    //console.log("Response Object ", res);
    //console.log("Request Object ", req);
    //res.send("Hello World");
    res.send('From sendhtml'); 
    
});

//casesensetive
// router.get('/sendhtml', (req, res) => { 
//     console.log("I am in routes from ", res); 
    
//     //console.log("Response Object ", res);
//     //console.log("Request Object ", req);
//     //res.send("Hello World");
//     res.sendfile('./index.html'); 
    
// });

//Default call
router.get('*', (req, res) => { 
    //console.log("I am in routes from ", res);
    //console.log(typeof req.app != "undefined" ? req.app.locals.user : "App is not present");    
    //console.log("Response Object ", res);
    //console.log("Request Object ", req);
    //res.send("Hello World");
    
    res.sendfile('./index.html');    
});

router.next = function(data) {
    //console.log(data);
};

//console.log(typeof app != "undefined" ? app.locals.user : "App is not present");

module.exports = router;