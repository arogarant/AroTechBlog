let img = document.getElementById("img");
let publisher = document.getElementById("publisher");
let date = document.getElementById("date");
let btn =document.getElementById("btn");
let title =document.getElementById("title");

let author = ["Your jac","blackHate","frizzyUmer"];
for (let i = 0; i < author.length; i++) {
    publisher.innerHTML=author[i];    
}
date.innerHTML="01/05/2022";
title.innerText="AI IS FUTURE"