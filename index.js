// A.part 1:Coding questions:

// var x = "123";
// console.log(Number(x)+7);               (1)

// var x = 0;
// if (x==false)
//     console.log("invalid")
//     else
//         console.log("valid")            (2)

// for (let i=1;i<=10;i++){
//     if (i%2==0) {
//         continue   
//     }
//     console.log(i);
// }                                       (3)

// let num=[1,2,3,4,5];
// let even=num.filter(check_even);
// function check_even(num){
//     if(num%2==0)
// return console.log(num)
// }                                       (4)

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(arr3);                      (5)

// function getDay(num) {
//     switch(num) {
//         case 1:
//             return "Sunday";
//         case 2:
//             return "Monday";
//         case 3:
//             return "Tuesday";
//         case 4:
//             return "Wednesday";
//         case 5:
//             return "Thursday";
//         case 6:
//             return "Friday";
//         case 7:
//             return "Saturday";
//         default:
//             return "Invalid number";
//     }
// }
// console.log(getDay(3));                  (6)


// let arr=["a","ab","abc"]
// let newArr= arr.map(function(strings){
//     return strings.length;
// });
// console.log(newArr);                     (7)


// function division(num){
//     if (num%3==0 && num%5==0)
//         return console.log("divisible by both");
//     else
//         return console.log("not divisible with each")

//     }
// division(15)                             (8)


// const square = (num) => num * num ;
// console.log(square(5))                   (9)

// function persondata(){
//     let {name,age} = person
//     return name+" is "+age+" years old";
// }
// let person = {name:'john',age:25}
// console.log(persondata(person));         (10)

// function summation(h,w,x,y,z){
//     return h+w+x+y+z;
// }
// console.log(summation(1,2,3,4,5));         (11)

// function successfull(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("success");
//         },3000);
//     });
// }
// successfull().then(message =>
//     console.log(message));                    (12)

// function largestNum(arr){
//     return Math.max(...arr);
// }
// console.log(largestNum([1, 3, 7, 2, 4]));    (13)

// let user={name:"john" , age: 30}

// function userData(object){
//     return Object.keys(object)
// } 
// let keys=Object.keys(user)
// console.log(userData(user));                   (14)

// let string="The quick brown fox";
// function splitWords(str){
//     return str.split(" ")
// }
// console.log(splitWords(string));                 (15)


// B.part 2:Essay questions:

/*
1.Foreach:it define every single data in the array in single line its used only in arrays
For...of: works on iterables(arrays,strings,maps,sets)


2. hoisting: means that the variables will be declared before executing the code 
(var) hoisted with value (undefined)
(let,const) hoisted but cannot accessed because the (TDZ)
Example:
var x;         
console.log(x);  
x = 10;


TDZ: is the period between the start of the block and the line that (let or const) is been declared
Example:
console.log(y); <= this is a TDZ
let y = 20;  <= let has been declared


3. the (==) compares between the values of two variables but (===) compares the values and data types

4.try-catch: is used to handle errors in javascript so the program does not get fail or stop
try block: place the code that might throw an error here
catch block: runs if an error occurs in the try block

it prevents the program from crashing when an asynchronous task fails.
it provides a clear and structured way to manage asynchronous errors
it makes asynchronous code easier to read and maintain.
it ensures that rejected promises are handled instead of causing unhandled rejection issues

5. type conversion happens when you manually change the data type of a value of a variable using a functions like Number()
Example:
let num = 42;
let str = String(num);

type coercion happens when javascript automatically converts a value of a variable to another data type
Example:
let x = 5 + "5";  
console.log(x);
*/