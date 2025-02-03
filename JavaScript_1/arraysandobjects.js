console.log("This is about the array and objects in Javascript  ");


// //Arrays in Javascript 
// // IT is the ordered collection of items and elements

// let fruits =["Apple","Mango","Grapes"];

// console.log(fruits);

// // Array Indexing 

// console.log(fruits[2]);

// let numbers = [1,2,3,4];
// let mixed = [1,2,3.4,"string",null,undefined];
// console.log(mixed);

// //You can store anything in an array 

// fruits[1] = "bannana"; // This is how you can mutate an array 
// console.log(fruits);

// // In javascript reference type are also known as obects 

// console.log(typeof fruits);// This will show the object 

// console.log(Array.isArray(fruits)); // This function confirms that this is the array type of object 

// //Array push and pop 

// fruits.push("Strawberry");
// console.log(fruits);
// let poppedfruit = fruits.pop(); // This method removes the last element but also returns that element 
// console.log("Popped fruit is ",poppedfruit);


// // Array shift and unshift 

// fruits.unshift("Blueberry");
// console.log(fruits);

// let shifted =fruits.shift();
// console.log(shifted);

// // Primitive vs Reference data types 
// console.log("-----------------------");

// console.log("This is the primitive type ");

// let num1 = 6;
// let num2 = num1;
// console.log("Value of num 1 is",num1);
// console.log("Value of num 2 is",num2);

// num1++;
// console.log("After incrementing num1");
// console.log("Value of num 1 is",num1);
// console.log("Value of num 2 is",num2);
// console.log("-----------------------");

// console.log("This is the reference type");

// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log("array1",array1);
// console.log("array2",array2);

// console.log("After pushing element to array 1");
// array1.push("item3");
// console.log("array1",array1);
// console.log("array2",array2);


// // Array Clone

// let arr1 = [ "item1","item2"];
// let arr2 = arr1.slice(0);
// let arr3 = [].concat(arr1);

// //Spread operator
// let arr4 = [...arr1];

// let arr5 = arr1.slice(0).concat(["item3" ,"item4"]);
// arr1.push("item3");
// console.log(arr1===arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);

// // For loop in array 

// let fruits =["Apple","Mango","Grapes","Bannana"];

// // let i = fruits.length -1 ;
// // console.log(i);

// for(let i =0; i<=fruits.length-1; i++){
//     console.log(fruits[i].toUpperCase());
// }

// // Use const for Array 
// const fruits = ["Apple","Mango","Grapes","Bannana"];
// fruits.push("mango");
// console.log(fruits); 

// // For of loop in array 
// const fruits = ["Apple","Mango","Grapes","Bannana"];
// // for (let fruit of fruits){
// //     console.log(fruit);
// // }
// // For in loop 

// for (let index in fruits){
//     console.log("fruits in index "+ index + " is " +fruits[index]);
// }

// // Array Destructuring 

// const myArray = ["Value1" , "Value2", "Value3","Value4"];
// // let myvar1 = myArray[0];
// // let myvar2 = myArray[1];
// // console.log("Value of myvar1",myvar1);
// // console.log("Value of myvar2",myvar2);

// let [myvar1,myvar2,...myArr] = myArray;
// //let myArr = myArray.slice(2);
// console.log("Value of myvar1",myvar1);
// console.log("Value of myvar2",myvar2);
// console.log("My new array ",myArr );

//Objects in js   --------> It is also the reference type 
// Objects are used for real life data and have key value pairs

// const person = {
//     name:"Prince",
//     age:22,
//     hobbies: ["Gaming", "Sleeping", "Listening"]
    
//     };
// console.log(person);
// console.log(person.name);
// console.log(person.age );

// // How to add key value pair in object
//   person.gender ="male";
// console.log(person);

// // HOW TO ITERATE OBJECTS 

// //For in loop 

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

// //Object.keys method 

// console.log(Object.keys(person));

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// // Computed properties 

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);

// //Spread Operator in objects 

// const obj1 = {
//     key1 : "Value1",
//     key2 : "Value2",

// };

// const obj2 = {
//     key3 : "Value3",
//     key4 : "Value4",

// };

// const newObject= { ...obj1,...obj2};

// console.log(newObject);

// // Destructuring in object

// const band = {
//     bandName : "Let Code",
//     famousSong : "Web tech",
//     year :1968,
//     anotherSong: "Job"
// };

// const {bandName,famousSong,...restProps} = band;
// console.log(bandName,famousSong);
// console.log(restProps);


// //Objects Inside Array , useful in real world application

// const users = [
//     {
//         userId:1 ,firstNme:"Prince", gender: 'male'
//     },
//     {
//         userId:2 ,firstNme:"Vishal", gender: 'male'
//     },
//     {
//         userId:3 ,firstNme:"Akash", gender: 'male'
//     },

// ]

// console.log(users);

// for(let user of users){
//     console.log(user.firstNme);
// }

// //Nested Destructuring 

// const users = [
//     {
//         userId:1 ,firstNme:"Prince", gender: 'male1'
//     },
//     {
//         userId:2 ,firstNme:"Vishal", gender: 'male2'
//     },
//     {
//         userId:3 ,firstNme:"Akash", gender: 'male3'
//     },

// ]

// const [{firstNme}, ,{gender}] = users;
// console.log(gender);