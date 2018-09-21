$(function() {
    
    /*-------------------------------------------------------------------*/
    /*  Background Carousel. Requires Owl Carousel Plugin.
    /*-------------------------------------------------------------------*/
    $('.owl-bg-carousel').owlCarousel({
        autoPlay: true,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        singleItem: true,
        navigation : true,
        navigationText: ["<i class='icon-Arrow-OutLeft'></i>", "<i class='icon-Arrow-OutRight'></i>"]
    });
});