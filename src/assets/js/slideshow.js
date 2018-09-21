$(function() {
    
    /*-------------------------------------------------------------------*/
    /*  A simple script that allows you to add a slideshow-capable
    /*  background image to any html page. Requires jQuery backstretch
    /*  plugin.
    /*-------------------------------------------------------------------*/
    var ww = Math.max($(window).width(), window.innerWidth);
    
    if (jQuery.browser.mobile === false || ww > 1023){
        $.backstretch([
            "assets/images/bg-slideshow-1.jpg",
            "assets/images/bg-slideshow-2.jpg"
        ], {duration: 2000, fade: 2000});
    }
});