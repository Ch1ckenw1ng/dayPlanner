let container = document.getElementsByTagName("div");
let time = moment().hours();
let date = moment().format("dddd, MMMM");
let currentDate = document.querySelector("#lead");

//document.getElementById("currentday").textContent = "today is " + date;
//currentDate.appendChild.textcontent(date);

setInterval(() => {
    
    let today = moment();
    $("div").text(today.format("h:mm:ss a"));
}, 1000);

console.log(time);
console.log(date);

