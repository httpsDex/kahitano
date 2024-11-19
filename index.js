// console.log(fetch('https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=')

// .then(response => {
//     console.log(response)
//         return response.blob()
// })

// .then(blob => {
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })

// .catch(error => {
//     console.log(error)
// })
// )


//id selector
const content = document.querySelector('#content')

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html = ""
    fetch("http://localhost:1804/api/hello", { mode: "cors" })
    // fetch("https://bscs3a-api-crud-22f1.onrender.com/api/hello",{mode: "cors"})
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          html += `<li>${element.first_name} ${element.last_name}</li>`;
        });
        content.innerHTML = html;
      })

      .catch((error) => {
        console.log(error);
      });
}



// //id selector
// const content=document.querySelector("#content")

// //loading page
// window.addEventListener("load", () =>{
//     getUsers()
// })

// function getUsers(){
//     let html=""

//     fetch("http://localhost:1804/api/hello" , {mode: "cors"})
//     .then((response) =>{
//         console.log(response)
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         data.forEach((element) =>{
//             html += `<li>${element.first_name} ${element.last_name}</li>`
//         })

//         content.innerHTML = html
//     })
//     .catch((error) =>{
//         console.log(error)
//     })

// }