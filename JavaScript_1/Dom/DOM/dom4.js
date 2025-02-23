

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");



// Event Delegation 


// child.addEventListener("click", ()=>{
//     console.log("Captured !!!!! child");
// },true )
    
// parent.addEventListener("click", ()=>{
//     console.log("Captured !!!!! parent");
// },true)
grandparent.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
},true);










// // Capturing Events 
// child.addEventListener("click", ()=>{
//     console.log("Captured !!!!! child");
// },true )
    
// parent.addEventListener("click", ()=>{
//     console.log("Captured !!!!! parent");
// },true)
// grandparent.addEventListener("click", ()=>{
//     console.log("Captured !!!!! grandparent");
// },true)
// document.body.addEventListener("click", ()=>{
//     console.log("Captured !!!!! body");
// },true)


// // THis is bubbling in js 
// child.addEventListener("click", ()=>{
//     console.log("You clicked on child");
// })

// parent.addEventListener("click", ()=>{
//     console.log("You clicked on parent");
// })
// grandparent.addEventListener("click", ()=>{
//     console.log("You clicked on grandparent");
// })
// document.body.addEventListener("click", ()=>{
//     console.log("You clicked on body");
// })