


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

var cursor3 = document.querySelector(".cursor3");

document.getElementById("d1").addEventListener("mouseover", mouseOver);

function mouseOver() {
    cursor.style.cssText = cursor2.style.cssText = "display: none";
    cursor3.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('.nav');
    const x = document.querySelector('.navbar');
    const y = x.getElementsByTagName("a");
    const logo = document.querySelector('.logoimg');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        for (let i = 0; i < y.length; i++) {
            y[i].style.color = "#000";
        }
        logo.style.filter = "invert(100%)";
    } else {
        header.classList.remove('scrolled');
        for (let i = 0; i < y.length; i++) {
            y[i].style.color = "#fff";
        }
        logo.style.filter = "invert(0%)";
    }
});

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
};


var logoslide = document.querySelector(".logos");
window.addEventListener('scroll', function () {
    var value = 4600 - window.scrollY;
    logoslide.style.cssText = "left: " + value + "px;";
});

var logoslide2 = document.querySelector(".logos2");
window.addEventListener('scroll', function () {
    var value = window.scrollY - 6000;
    logoslide2.style.cssText = "left: " + value + "px;";
});


var logoslide3 = document.querySelector(".logos3");
window.addEventListener('scroll', function () {
    var value = 6500 - window.scrollY;
    logoslide3.style.cssText = "left: " + value + "px;";
});

var logoslide4 = document.querySelector(".logos4");
window.addEventListener('scroll', function () {
    var value = window.scrollY - 8000;
    logoslide4.style.cssText = "left: " + value + "px;";
});


var aboutimg = document.querySelector(".aboutimg");
window.addEventListener('scroll', function() {
    var value =  1650-window.scrollY;
    aboutimg.style.cssText = "top: " + value + "px;";
});

var aboutimg1 = document.querySelector(".aboutimg-1");
window.addEventListener('scroll', function() {
    var value =  3500-window.scrollY;
    aboutimg1.style.cssText = "top: " + value + "px;";
});

var aboutimg2 = document.querySelector(".aboutimg-2");
window.addEventListener('scroll', function() {
    var value =  3150-window.scrollY;
    aboutimg2.style.cssText = "top: " + value + "px;";
});

$(document).ready(function(){

    // link action
    $(".action").click(function(e){
        e.preventDefault();

        $(".slide").removeClass("active");
        var slide = $(this).closest(".slide");
        slide.addClass("active");
    });

});

// checkWidth
checkWidth = function(){
    var windowsize = $(window).width();
    if (windowsize > 480) {
        var slideWidth = $('.active').width();
        $('.slide-content').css({
            "width" : slideWidth+"px"
        });
    }

}

$(window).resize(function() {
    // onresize
    checkWidth();

    // finish resize
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout( checkWidth , 500);
});

let line1 = document.querySelector('.logos-slide');

window.onscroll = () => {
    let pos = window.scrollY - 800;
    line1.style.left = '${pos}px';
}

var hamburger = document.querySelector(".hamburger");

document.addEventListener("click", function() {
    hamburger.classList.add('show');
});








