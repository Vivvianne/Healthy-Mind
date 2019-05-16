$(document).ready(function(){

  var $newHeader = $("<section/>")
    .addClass("head_cover")
    .html('<header id="header_cont"> <img src="./images/menu.png" alt="menu" class="menu_bar"><p class="nav_name">Healthy <span>mind</span></p><nav><ul><li class="log_sign"><a href="">Sign Up</a>|<a href="">Login</a></li></ul></nav></header> <main id="nav_content"><p class="close_cont"><span class="log"><a href="">Login</a>|<a href="">Sign up</a></span><span class="close">&cross;</span></p><ul><li>Home</li><li>About us</li><li>Self Care</li><li>Contact Us</li><li>Speak to a professional</li><li>Take test</li></ul> </main>');

  $("#head_cover").append($newHeader);
  
  $(".menu_bar").click(function(){
    $("#nav_content").slideToggle(1000);
  });
  $(".close").click(function(){
    $("#nav_content").slideToggle(1000);
  });
}); 