let currentDay = document.getElementById("currentDay");
let container = document.getElementsByTagName("lead");
let time = moment().hours();
let date = moment().format("dddd, MMMM,  h:mm a");
let currentDate = document.querySelector("#lead");

//document.getElementById("currentday").textContent = "today is " + date;
//currentDate.appendChild.textcontent(date);
currentDay.innerHTML = date;

console.log(time);
console.log(date);

