$(window).scroll(function(){
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    //parallax for goals
    $('.parallax--des').css("transform",
    "translateY(" + -(wScroll/10) + "%)");
    $('.parallax--tit').css("transform",
    "translateY(" + +(wScroll/4) + "%)");
}
