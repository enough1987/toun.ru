// S C R O L L

$(function() {

    $("#scroll-arrow").on('click', function() {
        console.log('scroll');
        scrollToElem('content', 500);
    });

    function scrollToElem(elem, speed) { //elem - id элемента
        if (document.getElementById(elem)) {
            var destination = $('#' + elem).offset().top;
            $("html,body").animate({
                scrollTop: destination
            }, speed, function() {
                $('#menuTop').removeClass('menu-hide');
            });
        }
    }
});
