$(function(){
    
    /*-------------------------------------------------------------------*/
    /*  Filterable portfolio. Requires isotope js.
    /*-------------------------------------------------------------------*/
    $(window).smartload(function(){
        var $container = $('.filterable-portfolio'),
        nav = $('.filterable-portfolio-nav');
        
        var isotopePortfolio = function(filter){
            $container.isotope({ 
                filter: filter, 
                animationOptions: { 
                    duration: 750, 
                    easing: 'linear', 
                    queue: false
                }
            }); 
        };
        
        isotopePortfolio('*');
        
        nav.find('a').click(function(e){ 
            e.preventDefault();
            
            var selector = $(this).attr('data-filter'); 
            
            nav.find('li').removeClass('active');
            nav.find('a').removeClass('disabled');
            
            $(this).parent('li').addClass('active');
            $(this).addClass('disabled');
            
            isotopePortfolio(selector);
        }); 
    });
});