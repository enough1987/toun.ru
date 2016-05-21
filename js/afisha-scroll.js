// S C R O L L

$(function() {
    $(".to-next-month").on('click', function(event) {
        console.log($(this).attr('href'));
        event.preventDefault();
        scrollToElem($(this).attr('href').slice(1), 500);
    });

    function scrollToElem(elem, speed) { //elem - id элемента
        if (document.getElementById(elem)) {
            var destination = $('#' + elem).offset().top;
            $("html,body").animate({
                scrollTop: destination
            }, speed, function() {
                // $('#menuTop').removeClass('menu-hide');
            });
        }
    }
});
