//===============================
// WOW Plugin triggres animate
//==============================
new WOW().init();

(function ($) {
    'use strict';
    
    jQuery(document).ready(function () {
        
        $(document).ready(function(){
            $("#testimonial-slider").owlCarousel({
                items: 2,
                itemsDesktop:[1000,3],
                itemsDesktopSmall:[990,2],
                itemsTablet:[767,1],
                pagination:true,
                navigation:false,
                autoPlay:true
            });
            
            $("#client_slider").owlCarousel({
                items: 4,
                itemsDesktop:[1000,3],
                itemsDesktopSmall:[990,2],
                itemsTablet:[767,1],
                pagination:true,
                navigation:false,
                autoPlay:true
            })
        });
        
        //Menu JS
        $(".toggle-btn").on("click", function () {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
        });
        
        //Change Color
       $(window).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('.header-top-area').addClass('menu-bg');
                jQuery("#logo-dark").css({"display": "inline"});
                jQuery("#logo-white").css({"display": "none"});
                jQuery(".nav-toggle .toggle-btn .icon-bar").css({"background-color": "#000"});
            } else {
                $('.header-top-area').removeClass('menu-bg');
                jQuery("#logo-dark").css({"display": "none"});
                jQuery("#logo-white").css({"display": "inline"});
                jQuery(".nav-toggle .toggle-btn .icon-bar").css({"background-color": "#fff"});
            }
        });
        
        //Smoothscroll
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
                
        //Extra JS
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
    });
})(jQuery);