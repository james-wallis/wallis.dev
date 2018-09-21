$(function(){
    
    /*-------------------------------------------------------------------*/
    /*  Parallax background. Requires skrollr js.
    /*-------------------------------------------------------------------*/
    $(window).smartload(function(){
        if (jQuery.browser.mobile === false){
            // This is for parallax using Skrollr
            var s = skrollr.init({
                forceHeight: false
            });

            // Refresh skrollr after resizing our sections
            s.refresh($('.parallax'));
        }
    });
});