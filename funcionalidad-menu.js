console.log(document.querySelector(".botonera"));

const ipad= window.matchMedia("screen and (max-width: 767px)");
const menu = document.querySelector(".botonera");
const burggerButton = document.querySelector("#burgger-menu");




ipad.addListener(validation);

function validation(event){
  if(event.matches == true){
    burggerButton.addEventListener("click", hideshow);

    console.log(event.matches);
  }
  else {
    burggerButton.removeEventListener("click", hideshow);
  }
}
validation(ipad);

function hideshow() {
  if (menu.classList.contains("is-active")){
    menu.classList.remove("is-active");
  }
  else {
    menu.classList.add("is-active");
  }
}
