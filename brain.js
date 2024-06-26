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
"use strict";
// let divUsers = document.getElementById("api-users");
// let btnLoad = document.getElementById("load-more");
// let curentPage = 1;
// let usersUl = document.getElementById("users-ul");
// let loadPrev = document.getElementById("load-prev");

// function getUsers(page) {
//   fetch("https://reqres.in/api/users?page=" + page, {
//     method: "GET",
//   })
//     .then(function (response) {
//       // console.log(response);

//       if (response.status !== 200) {
//         throw response.status;
//       }
//       return response.json();
//     })
//     .then(function (mosuliInfoJs) {
//       // console.log(mosuliInfoJs);

//       let fragment = document.createDocumentFragment();
//       mosuliInfoJs.data.forEach((element) => {
//         let li = document.createElement("li");
//         let img = document.createElement("img");
//         img.setAttribute("src", `${element.avatar}`);
//         li.innerText = `${element.first_name} ${element.last_name}`;
//         fragment.appendChild(li);
//         fragment.appendChild(img);
//       });
//       usersUl.innerText = " ";
//       usersUl.appendChild(fragment);

//       if (curentPage == 1) {
//         loadPrev.disabled = true;
//       } else if (curentPage > 1) {
//         loadPrev.disabled = false;
//       }

//       if(curentPage==2){
//         btnLoad.disabled=true
//       }else if (curentPage<2){
//         btnLoad.disabled=false

//       }
//     })
//     .catch(function (error) {
//       if (error == 404) {
//         let p = document.createElement("p");
//         p.innerText = "page not found";
//         divUsers.appendChild(p);
//       }
//     });
// }
// btnLoad.addEventListener("click", function () {
//   curentPage += 1;
//   getUsers(curentPage);
// });
// loadPrev.addEventListener("click", function () {
//   curentPage -= 1;
//   getUsers(curentPage);
// });
// getUsers(curentPage);

let divUsers = document.getElementById("api-users");
let btnLoad = document.getElementById("load-more");
let curentPage = 1;
let usersUl = document.getElementById("users-ul");
let loadPrev = document.getElementById("load-prev");

function getUsers(pages) {
  fetch("https://reqres.in/api/users?page=" + pages, {
    method: "GET",
  })
    .then(function (response) {
      // console.log(response);
      if (response.status !== 200) {
        throw response.status;
      }

      return response.json();
    })
    .then(function (item) {
      // console.log(item);
      let fragment = document.createDocumentFragment();
      item.data.forEach((element) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.setAttribute("src", `${element.avatar}`);
        li.innerText = `${element.first_name} ${element.last_naem}`;
        fragment.appendChild(li);
        fragment.appendChild(img);
      });
      usersUl.innerText=""
      usersUl.appendChild(fragment);
      disabled()
    })

    .catch(function (error) {
      if (error == 404) {
        let p = document.createElement("p");
        p.innerText = "server not found";
        divUsers.appendChild(p);
      }
    });
}
btnLoad.addEventListener("click", function () {
  curentPage += 1;
  getUsers(curentPage)
});

loadPrev.addEventListener('click', function(){
    curentPage-=1
    getUsers(curentPage)
})
getUsers(curentPage);

function disabled(){
    if (curentPage==1){
        loadPrev.disabled=true
    }else if(curentPage>1){
        loadPrev.disabled=false
    }

    if(curentPage==2){
        btnLoad.disabled=true
    }else if (curentPage < 2){
        btnLoad.disabled=false
    }
}