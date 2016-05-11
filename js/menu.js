$(function () {

    var smallMenuButtton = fe.g("i", "small-menu-buttton");
    var btnState = false;

    smallMenuButtton.addEventListener("click", function () {
        if (btnState) {
            $('#small-menu-buttton').toggleClass('inverse-small-menu-buttton');
            btnState = false;
        }
        if ($('#menu-small').css('display') == 'none' && $('#small-menu-buttton').hasClass('inverse-small-menu-buttton')) {
            $('#small-menu-buttton').toggleClass('inverse-small-menu-buttton');
            btnState = true;
        }
        fe.click(fe.g("i", "menu-small"));
    });


    // S C R O L L   F U N C T I O N S  F O R   M E N U  A B O U T

    (function () {
        var previousScroll = 0;

        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();

            if (currentScroll === 0) {
                $('#menuTop').removeClass('menu-hide');
                $('#menuTop').removeClass('inverse-nav');
                $('#menu_about').removeClass('inverse-menu');
                $('#menu_about .menu_paragraph').addClass('inverse-arrows');
                $('#menu_about img').replaceWith("<img src='icon/img/teatr-logo-small-white.png' />");

            }
            else if (currentScroll > 0) {
                if (!($('#menuTop').hasClass('inverse-nav'))) {
                    $('#menuTop').addClass('inverse-nav');
                    $('#menu_about').addClass('inverse-menu');
                    $('#menu_about .menu_paragraph').removeClass('inverse-arrows');
                    $('#menu_about img').replaceWith("<img src='icon/img/logo_invert.png' />");
                }
                if (currentScroll > previousScroll && $('#menuTop').css('top') == '0px' && $('#menu-small').css('display') == 'none') {
                    $('#menuTop').addClass('menu-hide');
                } else if (currentScroll < previousScroll && $('#menuTop').css('top') == '-150px') {
                    $('#menuTop').removeClass('menu-hide');

                }
            }
            previousScroll = currentScroll;
        });
    }());
});
