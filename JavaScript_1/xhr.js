// console.log("This is about XHR in JS "); 

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// // console.log(xhr);

    
// //Step 1 to use open method

// xhr.open("GET",URL);

// xhr.onload =()=>{
//     if(xhr.status >= 200 && xhr.status <300){
//         const response = xhr.response;
//         const data = JSON.parse(response);

//         const id = data[1].id;
//         // console.log(`The id is ${id}`);
//         const xhr2 = new XMLHttpRequest();
//         const url2 = `${URL}/${id}`;
//         // console.log(url2)
//         xhr2.open("GET", url2);
//         xhr2.onload = ()=>{
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2)
//         }
//         xhr2.send();
        
//         // console.log(data)
//     }else{
//         console.log("Something is wrong")
//     }
// }

// xhr.onerror = ()=>{
//     console.log("network Error")
// }


// xhr.send();

// // Doing the above using Promises 
const URL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest(method, url){
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url, true);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something went wrong"))
            }
        }
        xhr.onerror =function(){
            reject(new Error("Network gone wrong"));
        }
        xhr.send();
    }) 
}


sendRequest("GET",URL)
    .then(response=>{
        const data = JSON.parse(response);
        // console.log(data)
        return data;
    })
    .then(data =>{
        const id = data[3].id;
        return id;
    })
    .then(id =>{
        const URL2 = `${URL}/${id}`;
        return sendRequest("GET",URL2);
    })

    .then(newResponse =>{
        const newData = JSON.parse(newResponse);
        console.log(newData);
    } )
    .catch(error=>{
        console.log(error);
    }
    )




// console.log(xmlResponse);