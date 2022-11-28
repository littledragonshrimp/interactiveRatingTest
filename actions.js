const mainContainer = document.querySelector(".main")
const card2 = document.querySelector(".card-2")


function handleClick (){
    console.log("it works")
    var popUp = document.getElementById("popUp")
    popUp.classList.add("visible") // this adds the class "visible" you can now change this in scss as .visible
    
}


/*
function btnClick (){
    var btn = document.getElementByClass("btn")
    btn.console.log("also works") // this adds the class "visible" you can now change this in scss as .visible
}


var hide = document.getElementsById("card-hide")
    card-hide.classList.add("hide")
*/