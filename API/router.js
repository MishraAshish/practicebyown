//create a route
let express = require('express'),
studentModel = require("./DataModel/StudentModel"),
router = express.Router({caseSensitive:true});
global.testname = 'TestName';

//get put post delete patch, all- //put, post, get, delete, patch : crud
// api/getstudents, api/createstudent, api/updatestudent, api/deletestudent - CRUD

router.post('/api/createstudent', (req, res) =>{
    console.log("Body ", req.body);

    let studentObjForMongo = new studentModel({
        Name: req.body.Name,
        Password: req.body.Pass,
        SchoolName: {"version":"thought"}
    });
    studentObjForMongo.save((err, data, next)=>{        
        if (err) {
            res.send("Error Occurred"+ err);
        }        
        res.send("Student Saved Successfully", data, studentObjForMongo);
    });
});

router.get('/api/getstudents', (req, res) =>{

    studentModel.find((err, students) => {
        if (err){
            console.log("got an error!");
            res.send(err);
        }
        res.json(students);
    });

});

router.put('/api/updatestudent', (req, res) =>{
    console.log("Body ", req.body);
    
    studentModel.findById({_id:req.body.ID}, (err, student, next)=>{        
        if (err) {
            res.send(err);
            return;
        };

        console.log("student", student);
        if (student == null) {
            res.send("Can't be edited!");
            return;
        };

        student.Name = req.body.Name;
        student.Password = req.body.Pass;
        student.SchoolName = req.body.School;
        // save the student
        student.save(function(err) {
            //if (err) throw err;
            if (err) {
                res.send(err);
                return;
            };

            console.log('student successfully updated!');
            res.json(student);
            return;
        });
    });
});

router.delete('/api/deletestudent', (req, res) =>{
    console.log("Body ", req.body);
    
    studentModel.findById({_id:req.body.ID}, (err, student, next)=>{        
        if (err) {
            res.send(err);
            return;
        };

        console.log("student", student);
        if (student == null) {
            res.send("Can't be edited!");
            return;
        };

        // delete the user
        studentModel.deleteOne({ _id: req.body.ID }, function (err) {
            //if (err) throw err;
            if (err) {
            res.send(err);
            return;
            };

            console.log('student successfully deleted!');
            res.json(student);
            return;
        });
    });
});


// router.get('/userDetails', (req, res) => { 
//     let name = "Bikram";
//     //console.log(req.params);
//     //console.log(typeof req.params.id);
//     console.log("Protocol "+ req.protocol);
//     console.log("Path "+ req.path);
//     console.log(req.query.id);
//     if (parseInt(req.params.id) === 2 || parseInt(req.query.id) == 2) {
//         name = "Jerry"
//     }
//     var Client = require('node-rest-client').Client;
//     var client = new Client();
//     client.get('http://localhost:9090/username/5', function (data, response) {

//     console.log("Doctor Through HTTP Call" , data);
//     res.json(data);
//     });
//     //console.log(req);//res.send('Name Is : '+ name);
// });
// router.get('/username/:id', (req, res) => { 
//     let name = "Bikram";
//     console.log(req.params);
//     console.log(typeof req.params.id);
//     //console.log(typeof req.params.name);
//     if (req.params && parseInt(req.params.id) === 2) {
//         name = "Jerry"
//     }
//     res.json({"Detail":'Name Is : Jerrys request with client'});    
// });

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
    res.send("Hello World");//json data
    
    //res.sendfile('./index.html');    
});

router.next = function(data) {
    //console.log(data);
};

//console.log(typeof app != "undefined" ? app.locals.user : "App is not present");

module.exports = router;