console.log("This is about functions in javascript")
// // -----------------------------------------------------------------------------------------------------------------------------------
// // FUNCTIONS ARE THE SET OF INSTRUCTIONS 
// // -----------------------------------------------------------------------------------------------------------------------------------

// function singSong(){             // This is how you declare a function 
//     console.log("Hello");
// }
// singSong(); // This is how you call a function

// function addNum(num1,num2){
//     return num1 + num2;
// }
// const returnedSum = addNum(2 ,5);
// console.log(returnedSum);

// // Odd or Even 

// function evenOdd(number){
//     if(number %2 === 0){
//         return "The number is even ";
//     }
//     else{
//         return "The number is odd ";

//     }
// }

// console.log(evenOdd(2))


// function findTarget(array , target){
//     for(let i =0;i<=array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1 ,2,3,4,5,6]
// targetResult = findTarget(myArray ,3);
// console.log(targetResult);

// // -----------------------------------------------------------------------------------------------------------------------------------
// //Function Expression
// // -----------------------------------------------------------------------------------------------------------------------------------

// const singSong = function(){
//     console.log("Hello");
// }
// singSong();


// const findTarget = function (array , target){
//     for(let i =0;i<=array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1 ,2,3,4,5,6]
// targetResult = findTarget(myArray ,3);
// console.log(targetResult);


// // -----------------------------------------------------------------------------------------------------------------------------------
// // Arrow Function
// // -----------------------------------------------------------------------------------------------------------------------------------

// const findTarget = (array , target) =>{
//     for(let i =0;i<=array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1 ,2,3,4,5,6]
// targetResult = findTarget(myArray ,3);
// console.log(targetResult);


// // -----------------------------------------------------------------------------------------------------------------------------------
// // Hoisting 
// // -----------------------------------------------------------------------------------------------------------------------------------

// hello(); // This behaviour of calling the function before the initialization of function is called hosting  

// function hello(){
//     console.log("hello wolrd");
    
// }

// // -----------------------------------------------------------------------------------------------------------------------------------
// // Functions inside Functions 
// // -----------------------------------------------------------------------------------------------------------------------------------

// const app = () =>{
//     const myFunc =() =>{
//         console.log('hello from my function');
        
//     }
    
//     const addTwo =(num1 , num2)=>{
//         return num1+num2;
//     }

    
//     const mul =(num1 , num2)=>{
//         return num1*num2;
//     }
    
    
//     console.log("Inside App");
//     myFunc();
//     console.log(addTwo(4,7));
//     console.log(mul(4,7));

// }

// app();

// // -----------------------------------------------------------------------------------------------------------------------------------
// // Lexical Scope 
// // -----------------------------------------------------------------------------------------------------------------------------------

// function myApp(){
//     const myVar = "Value1";

//     function myFunc2(){
//         // const myVar ="Value 59";
//         console.log("inside myfunc2",myVar)
//     }

//     const myFunc3 = function(){
//         console.log("inside myfunc3",myVar)
//     }
     
//     const myFunc4 = () =>{
//         console.log("inside myfunc4",myVar)

//     }
    
//     console.log(myVar);
//     myFunc2();
//     myFunc3();
//     myFunc4();
// }

// myApp();

// // -----------------------------------------------------------------------------------------------------------------------------------
// // Block Scope vs Function Scope 
// // Let and const are block scope 
// // Var is function scope 
// // -----------------------------------------------------------------------------------------------------------------------------------


// // -----------------------------------------------------------------------------------------------------------------------------------
// // Default Parameters  
// // -----------------------------------------------------------------------------------------------------------------------------------

// function addTwo(a,b=0){
//     return a+b;
// }

// const ans= addTwo(9,9);
// console.log(ans);


// // -----------------------------------------------------------------------------------------------------------------------------------
// // Rest  Parameters  
// // -----------------------------------------------------------------------------------------------------------------------------------

// function myFunc(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// function addAll(...numbers){
//     let total = 0
// ;    for(number of numbers){
//         total = total + number;
//    }
//    return total;
// }
// const ans =addAll(1,2,3,4,5,6,7,8,9,10)
// console.log(ans);


// // -----------------------------------------------------------------------------------------------------------------------------------
// // Parameters Destructuring    // Use with object 
// // -----------------------------------------------------------------------------------------------------------------------------------


// const person = {
//     firstName: "harshit",
//     gender: "male"
// }


// // function printDetails(obj){
// //     console.log(obj.firstName);
// //     console.log(obj.gender);
    
// // }
// function printDetails({firstName,gender}){
//     console.log(firstName);
//     console.log( gender);
    
// }


// printDetails(person);


// // -----------------------------------------------------------------------------------------------------------------------------------
// // Callback functions   IT IS ALSO KNOWN AS HIGHER ORDER FUNCTION
// // -----------------------------------------------------------------------------------------------------------------------------------

// function myFunc(a) {
//     console.log(a);
//     a(); 
// }

// function myFunc2(){
//     console.log("Inside my function 2");
    
// }

// myFunc(myFunc2);



// // -----------------------------------------------------------------------------------------------------------------------------------
// // Function returning function THIS IS ALSO THE HIGHER ORDER FUNCTION
// // -----------------------------------------------------------------------------------------------------------------------------------

// function myFunc(){
//     function hello(){
//         return 'Hello peeps';
        
//     }
//     return hello
// }

// const ans = myFunc()
// console.log(ans());