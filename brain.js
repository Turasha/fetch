// //this
// //1. default binding

// function test() {
//   console.log(this);
// }

// test(); //window

// // 2. implicite binding rodesac funqcias vidzakhebt obiqtidan
// let users = {
//   name: "anna",
//   printname: function () {
//     console.log(this.name);
//   },
// };

// users.printname();

// // 3. explicit binding call, apply, bind

// let user1 = {
//   name: "nini",
//   printname: function () {
//     console.log(this.name);
//   },
// };

// let user2 = {
//   name: "lasha",
// };

// let user3 = {
//   name: "beka",
// };

// // user1.printname() aq daibechda nini
// // user1.printname.call(user3) // aq daibechdeba beka

// let printnamefnc2 = user1.printname.bind(user2); //binding

// printnamefnc2();

// //--
// let acordeon = document.querySelectorAll(".conteiner-acordion");
// acordeon.forEach(function (el) {
//   el.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// });

// სერვერიდან იმფორმაციის წამოღება
// 1. xml http requist
// let divUsers = document.getElementById("api-users");

// let requist = new XMLHttpRequest();
// requist.open("GET", "https://reqres.in/api/users?page=2");

// requist.addEventListener("load", function () {
//   let respons = this.responseText;
//   let responsJs = JSON.parse(respons);
//   console.log(responsJs);

//   let ul = document.createElement("ul");
//   let li = document.createElement("li");
//   li.textContent = responsJs.data[2].email;
//   ul.appendChild(li);
//   //   responsJs.data.forEach((item) => {
//   //     let li = document.createElement("li");
//   //     li.textContent = `${item.first_name} ${item.last_name}`;
//   //     ul.appendChild(li)
//   //   });
//   divUsers.appendChild(ul);
// });
// requist.send();

// requist.addEventListener('error', function(){
//     let p=document.createElement('p')
//     p.textContent='server error'
//     divUsers.appendChild(p)
// })

// // 2. fetch
// "use strict";
// let divUsers = document.getElementById("api-users");
// let btn = document.getElementById("load-more");
// let btnprev = document.getElementById("loadprev");
// let currentPage = 1;
// let ulList = document.getElementById("list-users");
// let totalPages;

// function getUsers(page) {
//   fetch("https://reqres.in/api/users?page=" + page, {
//     method: "GET",
//   })
//     .then(function (Response) {
//       // console.log(respons);
//       if (Response.status !== 200) {
//         throw Response.status;
//       }

//       return Response.json();
//     })
//     .then(function (mosuliInfo) {
//       let fragment = document.createDocumentFragment();

//       mosuliInfo.data.forEach((element) => {
//         let li = document.createElement("li");
//         li.innerText = `${element.first_name} ${element.last_name}`;
//         fragment.appendChild(li);
//       });
//       ulList.innerHTML = " ";
//       ulList.appendChild(fragment);
//       totalPages = mosuliInfo.total_pages;
//     })
//     .catch(function (error) {
//       if (error === 404) {
//         let p = document.createElement("p");
//         p.textContent = "page not found";
//         divUsers.appendChild(p);
//       }
//     });
// }

// btnprev.addEventListener("click", function () {
//     if(currentPage===1){
     
//     }

  

//   currentPage -= 1;
//   getUsers();
// });


// btn.addEventListener("click", function () {
//   // currentPage= currentPage+1
//   // currentPage++
//   if(currentPage==totalPages){
//     return
//   }
//   currentPage += 1;
//   getUsers(currentPage);
// });
// getUsers(currentPage);


let divUsers = document.getElementById("api-users");
fetch()