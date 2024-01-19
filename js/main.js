$(".open").on("click", function () {
  $(".sidebar").css("display", "flex");
  $("#navbar").animate({ left: -0 }, 1000);
});

$(".close").on("click", function () {
  let width = $(".sidebar").width();
  $("#navbar").animate({ left: -width }, 1000);
});
//smooth scroll
$('.nav-item a[href^="#"]').on('click',function(){
  let aHref= $(this).attr('href')
  let sectionOffset = $(aHref).offset().top
  $('body').animate({scrollTop:sectionOffset},2000)
})
//hide open
let sectionOffset = $('.acordion').offset().top
$(window).on('scroll',function() {
let scrollTop=$(window).scrollTop()
if (scrollTop>sectionOffset-450){
  $('.open').addClass('d-none');
}else{
  $('.open').removeClass('d-none');
}
})


$(".acordion").on("click", function () {
  $(".inner").not($(this).next(".inner")).slideUp();
  $(this).next(".inner").slideToggle();
});





var initialDurationInSeconds = (6 * 24 * 60 * 60 )+ (3 * 60 * 60) +( 3 * 60);
var interval = setInterval(function () {
  var days = Math.floor(initialDurationInSeconds / (24 * 60 * 60));
  var hours = Math.floor((initialDurationInSeconds % (24 * 60 * 60)) / 3600);
  var minutes = Math.floor((initialDurationInSeconds % 3600) / 60);
  var seconds = initialDurationInSeconds % 60;
  $(".box1").text(days + "D");
  $(".box2").text(pad(hours) + "h");
  $(".box3").text(pad(minutes) + "min");
  $(".box4").text(pad(seconds) + "sec");

  initialDurationInSeconds--;
  if (initialDurationInSeconds < 0) {
    clearInterval(interval);
    $(".box1").text("Time's up!"); 
  }
}, 1000); 
function pad(number) {
  return (number < 10 ? "0" : "") + number;
}



  var maxCharacters = 100;
  $('#message').on('input', function() {
    var remaining = maxCharacters - $(this).val().length;
    $('#charCount').text(remaining + ' characters remaining');
  });

