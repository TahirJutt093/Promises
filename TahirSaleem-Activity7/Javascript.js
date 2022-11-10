var promise = fetch('https://jsonplaceholder.typicode.com/users')
    promise.then((res) => res.json())
    .then((data) => {
        console.log(data, "data")
        for (var i = 0; i < data.length; i++) {
            document.getElementById("tableBody").innerHTML += `
        
        <tr>
        <td>${data[i].id}</td>
        

          <td>${data[i].name}</td>
          <td>${data[i].email}</td>
          <td>${data[i].address.street}</td>
          <td>${data[i].address.city}</td>
          <td>${data[i].address.zipcode}</td>
        
          </tr>
    
        `
        }
    }).catch((error)=>{console.log(error,"wrong api")})



































































// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response) {
//     return response.json();
// })
// .then(function(products) {
//     let placeholder= document.querySelector('#tableBody');
//     let out="";
//     for(let i=0;i<products.length;i++){
//         out+=`
//     <tr>
//         <td>${products[i].id}</td>
//         <td>${products[i].name}</td>
//         <td>${products[i].email}</td>
//         <td>${products[i].address.street},${products[i].address.city},${products[i].address.zipcode}</td>
//     </tr>
//     `;
//     }
//     placeholder.innerHTML= out;
// })
// function color(text) {
    
// }