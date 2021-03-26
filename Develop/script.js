let currentDay = document.getElementById("currentDay");
let container = document.getElementsByTagName("lead");
let time = moment().hours();
let date = moment().format("dddd, MMMM,  h:mm a");
let currentDate = document.querySelector("#lead");
//let hour = moment().format("h"); decided to use time

let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let t6 = document.getElementById("t6");
let t7 = document.getElementById("t7");
let t8 = document.getElementById("t8");
let t9 = document.getElementById("t9");

//document.getElementById("currentday").textContent = "today is " + date;
//currentDate.appendChild.textcontent(date);
currentDay.innerHTML = date;

console.log(time);
console.log(date);
console.log(hour);

if (time > )


t1.setAttribute("style", "background-color: red;" );