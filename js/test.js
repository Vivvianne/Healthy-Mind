var liveScore = 0;
var totalScore = 0;

$(document).ready(function () {
  i = 1;
  j = 1;
  var $newDiv = $("<section/>")
    .addClass("test_score")
    .html("<div class='res_cont'><h3>Your score is <span class='result'></span> out of 35</h3><p>If you are having thoughts or not feeling good about yourself most days please reach out straight away and talk to someone who is trained to help..</p></div><div class='self'><p>Read our Selfcare article and get to feel better about yourself.</p> <a href='selfhelp.html'><div class='pointer'><p> <i class='fas fa-comment-dots'></i>Explore self Care</p> <div class='point'></div></div></a></div>");

  $(".scroll,.prBtn").click(function () {
    i++;
    j = i;
    j--;
    $(".stage-" + i).fadeIn(1000);
    $(".stage-" + j).hide(0);
    $(".progress .q-" + j).addClass("done");

    if (i > 7) {
      $(".header").fadeOut(500);
      $(".choices").fadeOut(500);
      $(".thanks").slideToggle(1000);
      $(".thanks").delay(3000).fadeOut(1000);
      $(".quiz_cont").append($newDiv);
      $($newDiv).hide();
      $($newDiv).delay(3000).slideToggle(1000);
    }
  });
  $(".depressed").click(function () {
    liveScore = 1;
    totalScore += liveScore;
    $(".result").text(totalScore * 5);
    console.log(totalScore * 5);
  });
 
});