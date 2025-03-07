console.log("This is about promise, async , await and fetch API in js");


// console.log('Script Start ...........')

// // Promise -> It is such value that is determined in the future

// const bucket = ['coffee','chips','vegetables','salt','rice'];

// // Produced the promise 
// const myPromise = new Promise((resolve,reject) =>{   // This is how you declare a Promise using new making a class of promise which is a executor function
//     if(bucket.includes("vegetables")&&bucket.includes("rice")&&bucket.includes("salt")){
//         resolve("Fried Rice");
//     }
//     else{
//         reject("No fried rice");
//     }

// })


// //Consuming promise
// // How ?

// myPromise.then((myFriedrice)=>{ // This is when the promise is resolved 
//     console.log(`lets eat ${myFriedrice}`)
// }).catch((error)=>{
//     console.log(error);
// })

// setTimeout(() => {
//     console.log("Hello From setTimeoUt")
// }, 1000);



// for (let i= 1; i<=10;i++){
//     console.log(Math.random(),i)
// }


// console.log('Script End ...........')

// Function Returning promise 



// function ricePromise(){
//     const bucket = ['coffee','chips','vegetables','salt','rice'];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables")&&bucket.includes("rice")&&bucket.includes("salt")){
//             resolve("Fried Rice");
//     }else{
//         reject("No fried rice");
//     }
//     })
// }


// ricePromise().then(
//     (myfriedrice)=>{
//         console.log("lets eat",myfriedrice);
//     }
// ).catch(
//     (error)=>{
//         console.log(error)
//     })


// Promise and set time out 

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise().then(()=>{console.log("resolved")}).catch(()=>{console.log("rejected")})


//Promise.resolve   ||  Promise chaining 

// const myPromise =Promise.resolve(5);   // then method always returns a promise 
// myPromise.then(value =>{
//     console.log(value);
// })


// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo");
//     })
// }

// myPromise().then(value=>{
//     console.log(value);
//     value += "bar";
//     return value;
// })
// .then(value =>{
//     console.log(value);
//     value += "baaz";
//     return value;
// })

// .then(value =>{
//     console.log(value);
// })

// Solving the pyramid of doom using Promise 

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText (element, text, color, time){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color= color;
                reslove();
            }else{
                reject("Element not found");

            }
        },time)
    })
    
}


changeText(heading1,"one","Red",1000)
    .then(()=>changeText(heading2,"two","purple",1000))
    .then(()=>changeText(heading3,"three","green",1000))
    .then(()=>changeText(heading4,"four","orange",1000))
    .then(()=>changeText(heading5,"five","violet",1000))
    .then(()=>changeText(heading6,"six","indigo",1000))
    .then(()=>changeText(heading7,"seven","blue",1000))
    .catch((error)=>{
        alert(error);
    })