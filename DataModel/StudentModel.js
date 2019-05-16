let mongoose = require("mongoose"); // need a connection creator and which also provides helper method

mongoose.connect('mongodb://127.0.0.1/smarttrainees'); // create update and connect with smarttrainees

let Schema = mongoose.Schema; //

let NewSchema = new Schema(
    { 
        Name: {type: String, required: true}, 
        Password: String,
        SchoolName: {type: String, required: true} //MandatoryField
    }); //JSON - BSON (Binary JSON)

let StudentSchema = mongoose.model('student', NewSchema);

module.exports = StudentSchema;