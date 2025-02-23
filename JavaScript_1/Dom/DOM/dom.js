// // alert("This is todo app");
console.log("This is about Dom -> Document Object Model");

// // Overview

//  console.dir(window.document);
// How to use 

// // Select element using by get element by id 
// // This will only work for the elements with id 
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// // Select element using query selector
// // Will work with any element 

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);

// const header = document.querySelector(".header");
// console.log(header);

// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);


// Change text (textContent and innerText)

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);

// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent)

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);


//Change the style of elements 

// const mainHeading = document.querySelector("div.headline h2");
// // console.log(mainHeading.style)
// mainHeading.style.backgroundColor= "blue";
// mainHeading.style.border= "20px solid green"

// Get and set attrubutes

// const link = document. querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href","http://127.0.0.1:5500/index.html");

// const inputElement = document.querySelector(".form-todo input")
// console.log(inputElement.getAttribute("type"));



// Get multiple items using both 

// const navItems = document.getElementsByClassName("nav-item"); //Html collection
// console.log(Array.isArray(navItems));

// const navItems = document.querySelectorAll(".nav-item"); //Node List

// console.log(navItems);

// loop in dom

// const navItems = document.getElementsByTagName("a");
// for(let i = 0; i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor ="white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight ="bold";
// }


// For of in dom


// let navItems = document.getElementsByTagName("a");
// for(let navItem of navItems){
//     // console.log(navItems[i]);
//     // const navItem = navItems[i];
//     navItem.style.backgroundColor ="white";
//     navItem.style.color = "green";
// }


// Can't use for each method in this 
// But since the navItems are HTMLCollections that can be changed to and array

// navItems =Array.from(navItems);
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor ="white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight ="bold";
// });


// NODE list 

// let navItems = document.querySelectorAll("a");
// console.log(navItems);

// Node list we cn use alll three loops 


//-------------------------------------------------------------------------------------
// Inner HTml

// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1> Inner Html chaned </h1>"
// headline.innerHTML += "<button class= \"btn\"> learnmore </button>"


 // Class List in DOM

//  const sectionTodo = document.querySelector(".section-todo");
//  console.log(sectionTodo.classList); 

//  // Giving class in the element 
//  sectionTodo.classList.add('bg-dark');
//  // Removing class
//  sectionTodo.classList.remove('bg-dark'); 
//   // checking the class existience
//   const ans = sectionTodo.classList.contains("bg-dark");
//   console.log(ans);
//   //Toggel 
//   sectionTodo.classList.toggle("bg-dark");
//   console.log(sectionTodo.classList); 


//   const header = document.querySelector(".header");
//   console.log(header.classList);
//   header.classList.add('bg-dark');
//   header.classList.remove('bg-dark');
//   console.log(header.classList);


// cReation of HTMl elements from js 

// const todoList = document.querySelector(".todo-list");
// // console.log(todoList.innerHTML);
// todoList.innerHTML += "<li>New Todo</li>";
// todoList.innerHTML += "<li>Study</li>";


// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("study");
// newTodoItem.textContent ="Study";
// // newTodoItem.appendChild(newTodoItem);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// todoList.remove();


// BEfore and After 

// const newTodoItem = document.createElement("li");
// const todoList = document.querySelector(".todo-list");
// newTodoItem.textContent = "study";
// todoList.before(newTodoItem);



// todoList.insertAdjacentHTML("afterbegin","<li>Study js</li>")


// CLone nodes 

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent= "new todo";
// const li2= li.cloneNode(true);


// ul.append(li);
// ul.prepend(li2);


