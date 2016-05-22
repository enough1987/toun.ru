// S C R O L L

$(function() {

    if ( document.getElementById("scroll-arrow") ) {

    console.log( 'jquery-scroll.js is going' );  

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

    }   else {
        console.log( 'jquery-scroll.js has no id, so jquery-scroll.js is not going' );     
    }

});
