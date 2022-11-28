const mainContainer = document.querySelector(".main")
const card1 = document.querySelector(".card-1")
const card2 = document.querySelector(".card-2")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rate = document.querySelectorAll("btn")

function handleClick (){
    console.log("it works")
    var popUp = document.getElementById("popUp")
    popUp.classList.add("visible") // this adds the class "visible" you can now change this in scss as .visible
    
}

submitButton.addEventListener("click", () => {
    card2.classList.remove("hidden")
    card1.style.display = "none"
})




/*
rates.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        console.log("rate.innerHTML")
    })
})
*/

/*
function btnClick (){
    var btn = document.getElementByClass("btn")
    btn.console.log("also works") // this adds the class "visible" you can now change this in scss as .visible
}


var hide = document.getElementsById("card-hide")
    card-hide.classList.add("hide")
*/