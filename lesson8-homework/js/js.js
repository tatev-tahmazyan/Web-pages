$(document).ready(function(){
  $(".new-items-top-menu nav a").click(function() {
      $(".new-items-top-menu nav a").removeClass("active-border-bottom");
      $(this).addClass("active-border-bottom");
   });
});

$(document).ready(function(){
  $(".top-menu-container nav a").click(function() {
      $(".top-menu-container nav a").removeClass("active-color");
      $(this).addClass("active-color");
   });
});