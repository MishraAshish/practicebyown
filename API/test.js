for(var index = 0; index < 5; index++) {    
    setTimeout(() => {
        console.log("After Seconds "+ (index+1)); //3- "1 second, 3rd second, 5 second"
    }, 1000);
}













// console.log("File Name", __filename);

// console.log("Directory Name", __dirname);

// global.persons = [
//     {id : 1, name : "John", savedby : "CaptainAmerica"},
//     {id : 2, name : "Alice", savedby : "IronMan"},
//     {id : 3, name : "Roger", savedby : "CaptainAmerica"},
//     {id : 4, name : "Adam", savedby : "IronMan"},
//     {id : 5, name : "Alex", savedby : "SpiderMan"}
// ];

// console.log(global.persons);

// let fs = require("fs"),

// data = `Read, Write, Duplex and Transform Streams 
//         is used to read write data into a file
//         updated`,

// // Create a writable stream 
// writerStream = fs.createWriteStream('output.txt'); 

// // Write the data to stream with encoding to be utf8 
// writerStream.write(data,'UTF8'); 

// // Mark the end of file 
// writerStream.end();

// // Handle stream events --> finish, and error 
// writerStream.on('finish', function(err, data) { console.log("Write completed."); }); 

// writerStream.on('error', function(err, data) { 
//     console.log(err.stack); 
//     }); 
    
// console.log("Program Ended To Write Through Stream");

// //Lets write a code for read through stream

// // Create a readable stream 
// let readerStream = fs.createReadStream('output.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8'); 
// // Handle stream events --> data, end, and error 
// readerStream.on('data', function(chunk) { data += chunk; });

// readerStream.on('end',function() { console.log("read data ends over here : ", data); }); 

// readerStream.on('error', function(err) { console.log(err.stack); }); 

// console.log("Program Read Ended");