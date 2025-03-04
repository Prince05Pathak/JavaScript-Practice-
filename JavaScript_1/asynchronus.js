console.log("Hi this js practice")
// Synchronus vs Asynchronus Programing
//Synchronus are the task that are perfromed one after another 

// Js is synchronus programing and single threaded 

// Asynchronus Programing 



// setTimeout function 


// console.log("script start");

// // function hello(){
// //     console.log("Hello World");
// // }
// const id = setTimeout(()=>{
//     console.log("Inside setTimeout"); 
// },1000);
// console.log(`setTimeout id :${id}`)
// console.log("Clearing Time Out")
// clearTimeout(id);

//setInterval function 


// console.log("script start");

// setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// setInterval(() => {
//     let total = 0;
//     for(let i = 0; i<=100000;i++){
//         total +=1;
//    } 
//    console.log(total);
//    console.log(Math.random());
// }, 500);


// console.log("script end");


// const body = document.body;
// console.log(body)
// const button = document.querySelector("button");

// const setIntervalId = setInterval(() => {
//     const red = Math.floor(Math.random() *126);
//     const green = Math.floor(Math.random() *126);
//     const blue = Math.floor(Math.random() *126);
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.background =  rgb;
//     // console.log(rgb)
// },1000);

// button.addEventListener("click",()=>{
//     clearInterval(setIntervalId);
//     button.textContent = body.style.background;
// })



// console.log(setIntervalId);



// Understanding CallBacks 


// function myFunc(callback) {
//     console.log("Function is working")
//     callback();
// }



// myFunc(()=>{
//     console.log("Function2 is working");
    
// });

// function getTwonum(num1, num2, onSuccess,onFailure){
//     if(typeof num1 === "number" && typeof num2 =="number"){
//         onSuccess(num1, num2);
//     }
//     else{
//         onFailure();
//     }
    
// }


// getTwonum(8,5,(number1, number2)=>{
//     console.log(number1+number2);
// }, ()=>{
//     console.log("Wrong Data Type");
//     console.log("Please pass number type only ")
// });


// Callbacks , callback hell , pyramid of doom 
// asynchronus programing 

console.log("Hello Callback");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// This is the example of callbackhell 
// setTimeout(()=>{
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown";
//                         },1000);
//                     },3000);
//                 },2000);
//             },1000);
//         },2000);
//     },2000);
// },1000);


function changeText (element, text, color, time, onSuccess , onFailure){
    setTimeout(()=>{
        if(element){
        element.textContent = text;
        element.style.color= color;
            if(onSuccess){
                onSuccess();
            }    
        }else{
            if(onFailure){
                onFailure();
            }
        }
    },time)
}

// This is also known as pyramid of doom 


changeText(heading1,"one","violet",1000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3, "three","green",1000,()=>{      
            changeText(heading4, "four","red",1000,()=>{       
                changeText(heading5, "five","yellow",1000,()=>{       
                    changeText(heading6, "six","pink",1000,()=>{       
                        changeText(heading7, "seven","blue",1000,()=>{       
                    
        
                        },()=>{console.log("Heading7 is not present ")})
                    },()=>{console.log("Heading6 is not present ")})  
                },()=>{console.log("Heading5 is not present ")})
            },()=>{console.log("Heading4 is not present ")}) 
        },()=>{console.log("Heading3 is not present ")})
    },()=>{console.log("Heading2 is not present")})
},()=>{console.log("Heading1 is not present")})