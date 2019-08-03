(function($) {
    "use strict";

    

    new WOW({
        boxClass: 'wow', 
        animateClass: 'animated',
        offset: 0, 
        mobile: true, 
        live: true 
    }).init();

    

    jQuery('a[data-gal]').each(function() {
        jQuery(this).attr('rel', jQuery(this).data('gal'));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animationSpeed: 'slow',
        theme: 'light_square',
        slideshow: true,
        overlay_gallery: true,
        social_tools: false,
        deeplinking: false
    });

    

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

   

    $('body').scrollspy({
        target: '.docs-sidebar'
    });

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    })

    

    $(document).ready(function() {
       
        $(".media").fitVids();
    });

    

    $('.docs-sidebar>nav>li>a').click(function() {
        $('.docs-sidebar>nav>li').removeClass('active');
        $(this).parent().addClass('active');
    });

})(jQuery);
