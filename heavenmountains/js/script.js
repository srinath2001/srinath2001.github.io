$(document).ready(function () {


    $('.open-button').click(function () {
        $(this).toggleClass('open');
    });

    $('.open-button').click(function (e) {
        e.preventDefault();
        $('.nav-menu').toggleClass('open');
    });
});
$(document).ready(function () {
    $('.nav-menu a').click(function () {
        $('.nav-menu').toggleClass('open');
        $('.open-button').removeClass('open');
    });
});
$(function () {
    var btn = $('.backtotop');
    $(window).scroll(function () {
        if ($(window).scrollTop() < 100) {
            btn.addClass('hidden');
        } else {
            btn.removeClass('hidden');
        }
    });

    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000); // The number here represents the speed of the scroll in milliseconds
                    return false;
                }
            }
        });
    });
})


$(window).on('load', function () {
    $('.load').fadeOut('slow');
});

new WOW().init();