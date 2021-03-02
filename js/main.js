$(document).ready(function() {
    var x = (($(window).width()) - 1024) / 2;
    $('.wrap').css("left", x + "px");
});
// light mode 
function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}
// back to top 
var mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// go to top 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// translate 
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}