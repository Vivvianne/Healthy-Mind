$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 10) {
    $('.back-top').fadeIn();
  } else {
    $('.back-top').fadeOut();
  }
});
$(document).ready(function(){

  var $newHeader = $("<section/>")
    .addClass("head_cover")
    .html('<header id="header_cont"> <img src="./images/menu.png" alt="menu" class="menu_bar"><p class="nav_name">Healthy <span>mind</span></p><nav><ul><li class="log_sign"><a href="index.html#login">Sign Up</a>|<a href="index.html#login"><i class="fa fa-user"></i>Login</a></li></ul></nav></header> <main id="nav_content"><p class="close_cont"><span class="log"><a href="index.html#login"><i class="fa fa-user"></i>Login</a>|<a href="index.html#login">Sign up</a></span><span class="close">&cross;</span></p><ul><li><a href="index.html">Home</a></li><li><a href="read-more.html">About us</a></li><li><a href="selfhelp.html">Self Care</a></li><li><a href="index.html#feedback">Contact Us</a></li><li><a href="tests.html">Take test</a></li></ul> </main><a href="#head_cover"><div class="back-top"><i class="fa fa-angle-up"></i></div></a>');

  $("#head_cover").append($newHeader);
  
  $(".menu_bar").click(function(){
    $("#nav_content").slideToggle(1000);
  });
  $(".close").click(function(){
    $("#nav_content").slideToggle(1000);
  });
}); 