//variable
let clickHandler = document.querySelectorAll(".fermeture");
let formu = document.querySelector(".formu");
let footer = document.querySelector("footer")
let main = document.querySelector("main")
let test = false;
//boucle pour parcourir toutes les elements de clickHandler
for(i=0; i<clickHandler.length; i++){
    clickHandler[i].addEventListener("click", handleClick);
}
//function lié au onClick du html
function handleClick(){
    formu.classList.toggle("afficher");
}
//faire disparaitre le formulaire en cliquant en dehors de ce dernier
function clickAndRemove(){
    if(formu.classList.contains("afficher")){
        formu.classList.remove("afficher");
    }
}
main.addEventListener("click", clickAndRemove);
footer.addEventListener("click", clickAndRemove);









