// js for login

import header from "../component/header.js";
document.getElementById("header").innerHTML=header()

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("sign"));
  
    console.log(user);
  
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
  
    if (email == user.email && password == user.password) {
      alert("logged in");

<<<<<<< HEAD
      window.location.href="/index.html";
=======
      // window.location.href="MYNTRA-PROJECT/index.html";
>>>>>>> main
    } else {
      alert("Invalid");
    }
  });

