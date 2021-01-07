
$( document ).ready(function() {

fuToggleMenu(".header-right > a");
fuToggleMenu(".close");

})

function fuToggleMenu(selector){
  $(selector).click(function() {
   $('.hamburger-menu').toggle();
  })
}
