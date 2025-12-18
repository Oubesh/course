// console.log(__filename);
// console.log(__dirname);                                           (1)


// const path = require("node:path")
//let file_path="/user/files/report.pdf";
// let result =path.basename(file_path)
// console.log(result);                                              (2)


// const path = require("node:path")
// let file_path = "/folder/app.js";
// let result =path.parse(file_path)
// let result2 =path.format(result)
// console.log(result2);                                             (3)


// const path = require("node:path")
// let file_path = "/docs/readme.md";
// console.log(path.extname(file_path));                             (4)


// const path = require("node:path")
// let file_path = "/home/app/main.js"
// let result = path.parse(file_path)
// console.log(result);                                              (5)


// const path = require("node:path")
// let file_path="/home/user/file.txt"
// function AbsolutePath(path) {
//   return path.startsWith("/");
// }
// console.log(AbsolutePath(file_path));                             (6)       


// const path = require("node:path")
// let path1="src";
// let path2="components"
// let path3="Apps.js"
// let result=path.join(path1,path2,path3)
// console.log(result);                                              (7)


// const path = require("node:path")
// let path1="./index.js"
// let result=path.resolve(path1)
// console.log(result);                                              (8)


// const path = require("node:path")
// let path1="/folder1"
// let path2="folder2/file.txt"
// let result=path.join(path1,path2)
// console.log(result);                                              (9)  


// const fs = require("node:fs")
// fs.unlink("notes.txt",(err)=>{
//     err? console.log(err.message):console.log("the file notes.txt deleted");
// })                                                               (10)


// const fs = require("node:fs")
// fs.mkdirSync("./folder")
// console.log("Success");                                          (11)



// const {EventEmitter}= require("node:events")
// let eventEmitter = new EventEmitter();

// eventEmitter.on("start",()=>{
//     console.log("Welcome event triggered!");
// })
// eventEmitter.emit("start")                                       (12)


// const {EventEmitter}= require("node:events")
// let eventEmitter = new EventEmitter();

// eventEmitter.on("login",(data)=>{
//     console.log("User logged in:",data);    
// })
// eventEmitter.emit("login","Ahmed")                              (13)


// const fs = require("node:fs")
// let read= fs.readFileSync("notes.txt",{ encoding:"utf-8"})
// console.log(read);                                              (14)


// const fs = require("node:fs")
// fs.writeFile("async.txt","Async save",(err)=>{
//     err? console.log(err.name):console.log("done");
//     ;
// })                                                              (15)


// const path = require("node:path")
// const fs = require("node:fs")
// let file_path = path.resolve("notes.txt")
// if (fs.existsSync(file_path)) {
//     console.log(true);   
// }
//     else{
//         console.log(false); 
//     }                                                           (16)


// const os = require("node:os")
// console.log(os.platform());
// console.log(os.arch());                                         (17)



















