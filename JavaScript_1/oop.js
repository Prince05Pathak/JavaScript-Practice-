console.log('This is about object oriented programing in Js ');
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Methods in JavaScript 
// // Function Inside object 

// function personInfo(){
//     console.log(`Person name is ${this.firstName} and age is ${this.age}`);
// }


// const person1 = {
//     firstName : "Prince",
//     age : 22,
//     about: personInfo 
// }

// const person2 = {
//     firstName : "Piyush",
//     age : 23,
//     about: personInfo 
// }

// person1.about();

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Call Apply and Bind
// function about(hobby, favmusic){
//     console.log(this.firstName,this.age,hobby,favmusic);
// }

// const user1 = {
//     firstName: "user1",
//     age : 22,
   
// }

// const user2 = {
//     firstName: "User2",
//     age : 222
// }
// about.call(user1,"Drum","Johl");

// //Apply 
// about.apply(user1,["Guitar","Bach"]);

// //Bind 
// const bindFunc =about.bind(user2,"Guitar","Bach");
// bindFunc();

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Arrow Functions  -> Does not have it's own `this` 

// const user1 = {
//     firstName : "Prince",
//     age : 22,
//     about : ()=> {
//         console.log(`${this.firstName}, ${this.age}`);
//     }
// }

// user1.about();

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Short Syntax

// const user1 = {
//     firstName : "Prince",
//     age : 22,
//     about(){
//         console.log(`${this.firstName}, ${this.age}`);
//     }
// }
// user1.about();

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

            // OBJECT ORIENTED PROGRAMMING 
                        // Proto , Prototype , Class 


//    // Use case of __proto__ method .
// // Function -> Take input of First Name , Last Name , email , Address and creates a object , add key value pair and return the object for such 

// const userMethods = {
//     about :function(){
//         return `${this.firstName}${this.lastName} is ${this.age} years old. `;
//     },
//     is18 :function(){
//         return this.age >= 18;  
//     }
// }
// function createUser(firstName, lastName , email,age, address){
//     const user = Object.create(userMethods);// By this we are giving the proto reference of the method to the object 
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email; 
//     user.age = age;
//     user.address =address;
//     return user;
// }


// const user1 = createUser('Prince1' , 'Pathak1', 'prince@gmail.com1',22,'My Adress1');

// const user2 = createUser('Prince2' , 'Pathak2', 'prince@gmail.com2',22,'My Adress2');

// const user3 = createUser('Prince3' , 'Pathak3', 'prince@gmail.com3',22,'My Adress3');

// console.log(user1.about());



// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Prototype in Java Script 
// // Every Function in Java Script gives an empty object {} which can be utilized as a protoype 

// // const userMethods = {
// //     about :function(){
// //         return `${this.firstName} ${this.lastName} is ${this.age} years old. `;
// //     },
// //     is18 :function(){
// //         return this.age >= 18;  
// //     }
// // }

// function createUser(firstName, lastName , email,age, address){
//     const user = Object.create(createUser.prototype);  // Instead of defining the proto we mention the prototype in this 
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email; 
//     user.age = age;
//     user.address =address;
//     return user;
// }
// console.log(createUser.prototype);

// // Adding all the methods used as a object refrence as a prototype 

// createUser.prototype.about = function(){
//     return `${this.firstName} ${this.lastName} is ${this.age} years old. `;
// };

// createUser.prototype.is18 = function(){
//     return this.age >= 18;  
// };

// console.log(createUser.prototype);




// const user1 = createUser('Prince1' , 'Pathak1', 'prince@gmail.com1',22,'My Adress1');

// const user2 = createUser('Prince2' , 'Pathak2', 'prince@gmail.com2',22,'My Adress2');

// const user3 = createUser('Prince3' , 'Pathak3', 'prince@gmail.com3',22,'My Adress3');

// console.log(user1.about());

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // The New Keyword in java script 

// function createUser(firstName , age){
//     this.firstName =firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);0
// }

// const user1 = new createUser("Prince" , 22);
// console.log(user1);

// user1.about();

// function CreateUser(firstName, lastName , email,age, address){
//     //const user = Object.create(createUser.prototype);  // Instead of defining the proto we mention the prototype in this 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email; 
//     this.age = age;
//     this.address =address;

// }
// console.log(CreateUser.prototype);

// // Adding all the methods used as a object refrence as a prototype 

// CreateUser.prototype.about = function(){
//     return `${this.firstName} ${this.lastName} is ${this.age} years old. `;
// };

// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;  
// };

// console.log(CreateUser.prototype);




// const user1 = new CreateUser('Prince1' , 'Pathak1', 'prince@gmail.com1',22,'My Adress1'); // This is known as constructor function 

// const user2 = new CreateUser('Prince2' , 'Pathak2', 'prince@gmail.com2',22,'My Adress2');

// const user3 = new CreateUser('Prince3' , 'Pathak3', 'prince@gmail.com3',22,'My Adress3');

// for(let key in user1){
//     //console.log(key);
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// console.log(user3.about());



// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let numbers =[1,2,3,4,5,6];
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Class Keyword in javaScript 

// class CreateUser{
//     constructor(firstName, lastName , email,age, address){
//         console.log("Constructor is called");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email; 
//         this.age = age;
//         this.address =address;
//     }

//     about(){
//         return `${this.firstName} ${this.lastName} is ${this.age} years old. `;
//     }
//     is18(){
//         return this.age >= 18;
//     }
// }

// const user1 = new CreateUser('Prince1' , 'Pathak1', 'prince@gmail.com1',22,'My Adress1');

// console.log(user1.about())


// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Inheritance in Java Script 

// // CREATE A ANIMAL CLASS -> NAME AGE , METHOD -> EAT 

// class Animal{                              // Parent Class 
//     constructor(animalName, animalAge){
//         this.animalName =animalName;
//         this.animalAge =animalAge;
//     }
//     eat(){
//         return `${this.animalName} of age ${this.animalAge} is eating right now `;
//     }
// }

// // const animal1 = new Animal ("Dog",2);

// // console.log(animal1.eat());

// class Dog extends Animal{                  // Sub Class 


// }

// const tommy = new Dog("tommy",3);
// console.log(tommy)

// ******************************************************************************
// *                                 Super Keyword                              *
// ******************************************************************************


// class Animal{                              // Parent Class 
//     constructor(animalName, animalAge){
//         this.animalName =animalName;
//         this.animalAge =animalAge;
//     }
//     eat(){
//         return `${this.animalName} of age ${this.animalAge} is eating right now `;
//     }
// }

// // const animal1 = new Animal ("Dog",2);

// // console.log(animal1.eat());

// class Dog extends Animal{                  // Sub Class 
//     constructor(animalName,animalAge, speed){
//         super(animalName,animalAge);       // Using super to assign the values from the inherited class 
//         this.speed =speed;
//     }
//     eat(){
//         return `Modified Eat:${this.animalName} of age ${this.animalAge} is eating right now `
//     }
//     run(){
//         return `${this.animalName} is running at the speed of ${this.speed}`;
//     }

// }
// const tommy = new Dog("tommy",4,35);
// console.log(tommy.eat())

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Getters and Setters in JavaScript 

class Person{
    constructor(firstName, lastName,age){
        this.firstName =firstName;
        this.lastName =lastName;
        this.age =age;

    }
    static classInfo(){
        return 'this is perso class';
    }
    get fullName(){    // This get keyword makes the method as a property 
        return`${this.firstName} ${this.lastName} is the full name`
    }

    set fullName(fullName){
        
        const [firstName , lastName] =fullName.split(" ");
        this.firstName=firstName;
        this.lastName =lastName;
    }
}

const person1 = new Person("Prince","Pathak",22);
console.log(person1.fullName);

person1.fullName = "Anuj Pathak";
console.log([person1])

const ans = Person.classInfo();
console.log(ans);