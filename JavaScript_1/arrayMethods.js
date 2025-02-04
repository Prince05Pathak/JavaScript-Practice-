console.log("This is about the important array methods in javascript");
// // -----------------------------------------------------------------------------------------------
// // Foreach method
// // -----------------------------------------------------------------------------------------------


// const numbers = [4,3,6,7];
// const element = (number , index) =>{
//     console.log(`The number in index ${index} is ${number}`);
//     console.log(`${number}*2 = ${number*2}`); 
// }

// // for(let i =0; i<numbers.length;i++){
// //     element(numbers[i],i);  // This is when you use for loop
// // }

// numbers.forEach(element);

// const users = [
//     {firstName: "Prince" , age : 22},
//     {firstName: "Aayush" , age : 23},
//     {firstName: "Vishal" , age : 21}
// ]
// // users.forEach(function(user){
// //     console.log(user.firstName);
// // })

// users.forEach((user)=>{
//     console.log(user.firstName);
// })


// // -----------------------------------------------------------------------------------------------
// // Map method  -> Very important -> Always return something in the call back function 
// // -----------------------------------------------------------------------------------------------

// const numbers =[2,3,4,5,6];

// // const square =(number) =>{
// //     return number*number;
// // }
// const result =numbers.map((number, index)=>{
//     return `index : ${index},${number*number}`;
// });
// console.log(result);

// const users = [
//     {firstName: "Prince" , age : 22},
//     {firstName: "Aayush" , age : 23},
//     {firstName: "Vishal" , age : 21}
// ]

// const userResult = users.map((user) => {
//     return user.firstName;
// })

// console.log(userResult);



// // -----------------------------------------------------------------------------------------------
// // Filter Method
// // -----------------------------------------------------------------------------------------------

// const numbers =[1,6,2,4,8,9,12,11,15,10];

// const result = numbers.filter((number)=>{
//     return number%2 === 0 , number%2 !== 0;
// })
// console.log(result);

// // -----------------------------------------------------------------------------------------------
// // Reduce Method 
// // -----------------------------------------------------------------------------------------------

// const numbers = [1,2,3,4,5];

// const reduceNumbers = numbers.reduce((accumulator,currentValue) =>{
//     return accumulator+currentValue;
// })

// console.log(reduceNumbers);


// const userCart = [
//     {productId :1 , productName : "Iphone16pro" ,price: 150000 },
//     {productId :2 , productName : "Ipad", price: 50000 },
//     {productId :3 , productName : "Mac" , price: 250000 }
// ]

// const bill = userCart.reduce((totalPrice,currentProduct) => {
//     return totalPrice + currentProduct.price;
// },0)

// console.log(bill);

// // -----------------------------------------------------------------------------------------------
// // Sort Method 
// // ----------------------------s-------------------------------------------------------------------

// const numbers = [5,1,2,,44,12,34,76];
// numbers.sort((a,b)=>{
//     return b-a;
// });

// console.log(numbers); 

// const userCart = [
//     {productId :1 , productName : "Iphone16pro" ,price: 150000 },
//     {productId :2 , productName : "Ipad", price: 50000 },
//     {productId :3 , productName : "Mac" , price: 250000 }
// ]

// const priceSort = userCart.sort((a,b) =>{
//     return a.price-b.price;
// })

// console.log(priceSort);

// // -----------------------------------------------------------------------------------------------
// // Find Method 
// // -----------------------------------------------------------------------------------------------

// const myArr = ["Cat" , "Dog" , "Mouse" , "Lion"];


// const stringLength= myArr.find((string) =>{
//     return string.length === 4;
// })
// console.log(stringLength);

// const users = [
//     {userId: 1, userName: "Name1"},
//     {userId: 2, userName: "Name2"},
//     {userId: 3, userName: "Name3"},
//     {userId: 4, userName: "Name4"}

// ];

// const findUser = users.find((user)=>user.userId===3);
// console.log(findUser);



// // -----------------------------------------------------------------------------------------------
// // Every Method -> It returns true/false value (boolean values)
// // -----------------------------------------------------------------------------------------------

// const numbers = [2,4,6,8,10];

// const checkNumber = numbers.every((number)=>number%2===0);
// console.log(checkNumber);


// const userCart = [
//     {productId :1 , productName : "Iphone16pro" ,price: 150000 },
//     {productId :2 , productName : "Ipad", price: 50000 },
//     {productId :3 , productName : "Mac" , price: 250000 }
// ]

// const priceCheck = userCart.every((cartItem)=>cartItem.price>30000);
// console.log(priceCheck);

// // -----------------------------------------------------------------------------------------------
// // Some Method -> In an array if there is a single element that satisfy the condition then the result will be boolaean 
// // -----------------------------------------------------------------------------------------------

// const numbers = [2,3,5,8,10];

// const oddNumb = numbers.some((number)=>number%2!==0);
// console.log(oddNumb);


// const userCart = [
//     {productId :1 , productName : "Iphone16pro" ,price: 150000 },
//     {productId :2 , productName : "Ipad", price: 50000 },
//     {productId :3 , productName : "Mac" , price: 250000 }
// ]


// const highPrice = userCart.some((cartItem)=>cartItem.price>100000 );
// console.log(highPrice);


// // -----------------------------------------------------------------------------------------------
// // Fill Method [Make a array and fill that array with -1 and the length should be 10]
// // -----------------------------------------------------------------------------------------------

// const myArr = new Array(10).fill(-1);
// console.log(myArr);

// const myArr =[1,2,3,4,5,6,7,8,9];
// myArr.fill(0,2,7); // In this 0 is the number you want to fill and 2 is the starting index and 7 is the ending index
// console.log(myArr);



// // -----------------------------------------------------------------------------------------------
// // Splice Method  -> Used to delete and insert element in between the array  
// // -----------------------------------------------------------------------------------------------

const myArr = ["item1","item2","item3"];

// // Delete 

// const deleteItem =myArr.splice(1,1);
// console.log`Deleted item is ${deleteItem}`;

// // Insert 

// myArr.splice(1, 0, "Inserteditem4")
// console.log(myArr);

//Insert and Delete together

const deleteItem=myArr.splice (1,2,"Inserted1","Inserted2");
console.log(myArr);
console.log(`Deleted items are ${deleteItem}`);