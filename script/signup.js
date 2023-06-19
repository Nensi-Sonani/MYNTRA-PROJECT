// js for sign up

import header from "../component/header.js";
document.getElementById("header").innerHTML=header()

document.getElementById("sign-up").addEventListener("submit",function(e){
    e.preventDefault();
    let user={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      password:document.getElementById("pass").value,
      cpassword:document.getElementById("cpass").value,
      mobileno:document.getElementById("mnum").value
  }
  localStorage.setItem("sign",JSON.stringify(user));
  console.log(user);
 });