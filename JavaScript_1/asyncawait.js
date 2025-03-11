const URL = "https://jsonplaceholder.typicode.com/posts";

// Whenever you create a function using async it will always return a Promise 
async function getPosts(){
    const response = await fetch(URL); // In this the await method will wait to let let the promise be resolve 
    const data = await response.json();
    // console.log(response)
    return data;
}

getPosts()
    .then(myData=>console.log(myData))
    .catch(error =>console.log(error))


// fetch(URL)
//     .then(resposne =>resposne.json())
//     .then(urlData =>console.log(urlData))
