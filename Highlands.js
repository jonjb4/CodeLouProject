/*
http://snook.ca/archives/javascript/simplest-jquery-slideshow
*/


$(document).ready(function(){
    setInterval(function(){
      var $active = $('.fadein .active');

      $active.next('img').fadeIn(600).addClass('active');

    }, 3500);
});








/*



$(document).ready(function(){
    setInterval(function(){
      var $active = $('.fadein .active');

      $active.next('img').fadeIn(600).addClass('active');

      setTimeout(function(){
        $active.fadeOut(600).removeClass('active');
      }, 600);
    }, 5000);
});

*/
