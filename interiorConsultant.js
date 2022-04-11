let menu = document.querySelector(".material-icons");
let menuFullScreen = document.querySelector("ul");
let x = document.querySelector(".material-icons-outlined")

menu.addEventListener("click", function(){
    menuFullScreen.classList.toggle("menufull")
    menu.classList.replace("material-icons","hidemenu")
    x.classList.toggle("close")
})

x.addEventListener("click", function(){
    menuFullScreen.classList.toggle("menufull")
    menu.classList.replace("hidemenu", "material-icons")
    x.classList.toggle("close")
})