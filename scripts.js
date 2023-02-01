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

function openNav() {
    let nav = document.getElementById("nav");
    let burger = document.getElementById("hamburger");
    let logo = document.getElementById("Logo");
    logo.style.color = "#fff";
    burger.style.opacity = "0";
    nav.style.backgroundColor = "#041C32";
    nav.style.height = "300px";
}
function closeNav() {
    let qnav = document.getElementById("qnav");
    let nav = document.getElementById("nav");
    let burger = document.getElementById("hamburger");
    let logo = document.getElementById("Logo");
    qnav.style.color = "#fff";
    logo.style.color = "#041C32";
    burger.style.opacity = "1";
    nav.style.backgroundColor = "#fff";
    nav.style.height = "75px";
}