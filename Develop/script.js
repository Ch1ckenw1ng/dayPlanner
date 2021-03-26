let container = document.getElementsByTagName("div");

setInterval(() => {
    
    let today = moment();
    $("container").text(today.format("MMMM Do YYYY, h:mm:ss a"));
}, 1000);
