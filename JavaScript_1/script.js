// console.log("Hello World"); //It is used to print something on the console 

// // This is comment in javascript


// //Variables in js :
// //VAriables are used to store information which is to be used later in the program 

// var firstname = " Prince" ;
// console.log("Hi" +firstname); // This is how you call a variable

// firstname = " Anuj"; 
// console.log("Hi" +firstname);

// //Let Keyword 
// // You cannot change the variable using let but you change the information in it

// let firstname2 = " Prince Pathak ";
// console.log(firstname2);
// firstname2 ="Anuj Pathak ";
// console.log(firstname2);

// // Declare Constants 

// const pi = 3.14;
// console.log(pi);

// // String Indexing

// let firstname3 = "Prince";
// console.log(firstname3[3]);

// console.log(firstname3.length);
// console.log(firstname3[firstname3.length-1]);

//String Methods

let firstname4 = "Prince";
// //Trim
// console.log(firstname4.length);
// let newString = firstname4.trim();
// console.log(newString.length);

// // toUppercase
// console.log(firstname4.toUpperCase());

// //toLowerCAse
// newString =firstname4.toUpperCase();
// console.log(newString.toLowerCase());

// //Slice 
//     //Start Index  ->  End index

// let newString = firstname4.slice(0,4);
// console.log(newString);

// //Number to string 

// let age =33;
// let name = "Prince";

// age = age + "";
// console.log(typeof(age));

// //String to number

// let myStr = +"34";
// console.log(typeof myStr);

// let age = 18;
// age = String(age);
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);


// String Concatenation

// let string1 ="PRince";
// let string2 = "Pathak";

// let fullName = string1 + " " + string2;
// console.log(fullName);

// // Template String 

// let age = 22;
// let name2 ="Prince";

// // let me = "My name is " + name2 + "my age is " +age;
// // console.log(me);

// let aboutMe = `My name is ${name2} and my age is ${age} and this is the template string`;
// console.log(aboutMe);

// // Undifined -> When you create a variable and does not define it's value is called undefined 
// let firstname;
// console.log(typeof firstname);

// firstname = "Prince";
// console.log(typeof firstname, firstname);

// console.log(typeof null);

// //BigInt

// let myNumber = BigInt(12);// This is the primitive data type
// // console.log(myNumber);
// console.log(myNumber);
// console.log(myNumber + myNumber); 

// //if else condition 

// let age = 9;

// if(age=18){
//     console.log("Not allowed");
// }else if(age>=18 && age <55 ){
//     console.log("You are allowed")
// }else if(age>55){
//     console.log("You are above age")
// }else{
//     console.log("Age is not defined")
// }

let age = 12;
let drink = age >=15 ?"coffee" : "milk";
console.log(drink);

