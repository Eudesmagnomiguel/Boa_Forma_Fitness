//MENU
$(document).ready(main);
var contador = 1;
function main(){
   $('.btn-menu').click(function(){
  //$('.menu-bar').toggle();

  if(contador == 1){
    $('.nav-mobile').animate({
      left: '0'
    });
    contador = 0;
  } else {
    contador = 1;
    $('.nav-mobile').animate({
      left: '-100%'
    });
  }

   });
}

window.navigator.vibrate(200);

window.addEventListener("scroll", function(){
var  nav = document.querySelector("nav");
nav.classList.toggle("sticky",  window.scrollY > 650);

})

  