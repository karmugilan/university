$(document).ready(function(){
  $("#ham").click(function(){
    $("#mobilenavigation").slideToggle("slow");
  });
});
$(document).ready(function() {
    $("#backtoTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
 });
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#backtoTop').fadeIn();
  } else {
    $('#backtoTop').fadeOut();
  }
});
