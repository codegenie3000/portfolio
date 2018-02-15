/* Copyright Jonathan Peralez, 2017 */
/*jslint browser: true*/
/*jslint devel: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    // Switches skill based tabs
    $('.tabs .tab-links a').on('click', function (e) {
        e.preventDefault();
        
        var currentAttrValue = $(this).attr('href');
        $(currentAttrValue).fadeIn(500).siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });
    var $transitionPosition = $('#get-to-know').position().top;
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        var $menu = $('.menu');
        var $title = $('.title');
        var $nameUnderline = $('.name-underline');
        
        if (scroll >= $transitionPosition) {
            $menu.addClass('menu-light');
            $menu.removeClass('menu-dark');
            $title.addClass('title-light');
            $title.removeClass('title-dark');
            $nameUnderline.addClass('underline-light');
            $nameUnderline.removeClass('underline-dark');
        } else {
            $menu.addClass('menu-dark');
            $menu.removeClass('menu-light');
            $title.addClass('title-dark');
            $title.removeClass('title-light');
            $nameUnderline.addClass('underline-dark');
            $nameUnderline.removeClass('underline-light');
        }
    });
    
    $('a[href^="#get-to-know"]').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
    
    $('a[href^="#top"]').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
    
    $('a[href^="#projects"]').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});