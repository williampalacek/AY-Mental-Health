/*Document.query selector returns 
the first element in the docuement that matches the selector
meaning it finds the coresponding class in html*/
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

/*These will be called when specifed event is triggered*/
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

//Once event is triggered following styles are applied
function show() {
  //set css style
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  //Set css style
  mainMenu.style.top = "-105%";
}
