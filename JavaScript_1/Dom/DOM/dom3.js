console.log("This is about DOM Events");

// Intro to Events is java script 


// CLick 

// To add event there are 3 ways 

// const btn = document.querySelector(".btn-headline");

// // Method add event listner  (Important)
// const clicked =()=>{console.log("BUTTON IS CLICKED");}

// btn.addEventListener("click",clicked);

// This keyword inside 
// const btn = document.querySelector(".btn-headline");

// // Method add event listner  (Important)

// btn.addEventListener("click",function(){
//     console.log("BUTTON IS CLICKED");
//     console.log("The value of this is :")
//     console.log(this);
// }
// );


// Event Object 

// const firstbutton = document.querySelector(".btn-headline");
// firstbutton.addEventListener("click" , function(event){
//   console.log(event); 
// })


// const allButtons = document.querySelectorAll(".my-buttons button");

// for (let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget)
//     })
// }


// Behind the scenes of working 
// console.log("Script Start !!!!!!!!!!!");

// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e) =>{
//         let num =0;
//         for(let i =0; i<=100;i++){
//             num+=i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outervalue = 0;

// for(let i=0; i<=100;i++){
//     outervalue +=1;
// }

// console.log("Value of outer variable is",outervalue);


// console.log("Script End !!!!!!!!!!!");


// const colorButtons = document.querySelectorAll(".my-buttons button");
// console.log(colorButtons)
// const body = document.body;

// const randomColorGenerator = ()=>{
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const randomColor = `rgb(${red},${green},${blue})`

//     return randomColor;
// }

// colorButtons.forEach((button) =>{
//     button.addEventListener("click",()=>{
//         const randomColor = randomColorGenerator();
//         const randomTextColor =randomColorGenerator();
//         button.style.backgroundColor = randomColor;
//         button.style.color = randomTextColor;;
       
//         // body.style.backgroundColor = randomColor;
//     })
// })


// Key press and mouse over event 

// const body =document.body;

// body.addEventListener("keypress", (e)=>{
//     console.log(e);
// })



// const mainButton = document.querySelector(".btn-headline");

// mainButton.addEventListener("mouseover",()=>{
//     console.log("Mouse over even occured");
// })


// Event bubbling(Event propagation) , Event Capturing, Event Delegation

