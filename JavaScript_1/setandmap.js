console.log("This is about set and map data structure in javascript");

// Iterables -> In which we can use for of loop like string and array

// const firstName = "Prince";

// for (let char of firstName){
//     console.log(char)
// }

// const items = [ "Item 1" , "Item 2" , "Item 3"];

// for (let item of items){
//     console.log(item);
// }


// const users = {
//     'key1':'value1',
//     'key2':'value2'
// }

// for (let user of users){
//     console.log(user);
// }


// Array like object 
// Those which have length property and their index is accesable 

// SET in JAVASCRIPT 
// No index-based access
// No duplicate elements 
// Unique items only and order is not guranteed


// const numbers = new Set();
// numbers.add(1); 
// numbers.add(['i1','i2']);
// numbers.add(['i1','i2']);
// if (numbers.has(1)){
//     console.log('1 is present');
// }
// else{
//     console.log('1 is not present');

// }

// for (let num of numbers){
//     console.log(num);

// }

// const myArray = [1,2,2,3,3,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// let len = 0;
// for (let element of uniqueElements){
//     len++;
// }
// console.log(len);


//MAP IN JAVASCRIPT
// Store data in odered fashion
// Store key value pairs 


// Object literals -> The key will be in sumbol or in the form of string

// const person = {
//     firstName : "Prince",
//     age : 7,
//     1:"one"
// }

// for (let key in person){
//     console.log(key)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             


// }
// const person = new Map();
// person.set('firstName','Harshit');
// person.set('age', 7);
// console.log(person.get('age'));
// console.log(person.keys());

// for (let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value]  of person){
//     console.log(key , value);
// }

// const person1 = {
//     id:1,
//     firstName: 'Prince'
// }

// const person2 = {
//     id:2,
//     firstName: 'Vanshika'
// }




// const extraInfo = new Map();
// extraInfo.set(person1,{age:22 , gender:'male'});
// extraInfo.set(person2,{age:22 , gender:'female'});

// // console.log(userInfo)

// console.log(person1.id);
// console.log(person1.firstName);
// console.log(extraInfo.get(person1).gender)

// console.log(person2.id);
// console.log(person2.firstName);
// console.log(extraInfo.get(person2).gender)




// // const person = new Map([['firstName','Prince'], ['Age', 7]]);
// // console.log(person);


// Cloning using objects./assign

// const obj = {
//     key1: "Value 1",
//     key2: "Value 2"
// }

// // const obj2 = {...obj};

// const obj2 = Object.assign({},obj);
// obj.key3 = "Value 3";

// console.log(obj);
// console.log(obj2);

// Optional Chaining 

const user = {
    firstName: "Prince",
    // address: {houseNumber : '1234'}  
}

console.log(user.address?.houseNumber)