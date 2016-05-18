/**
 * Created by apple on 14.05.16.
 */

$(function () {
    var prevScroll = 0;
    var offset = $(".fixed_aside").offset();
    var topPadding;
    //$('.right-box').height($('.left-box').height());
    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();
        //console.log('currentScroll', currentScroll);
        //console.log('offsetTop', offset.top);
        //console.log($(".left-box").height());
        //if ($('.fixed_aside').offset().top > 30) {
        //    var x = 110;
        //}else {
        //    var x = 20;
        //}
        if (currentScroll > prevScroll && currentScroll > offset.top) {
            // ЕДЕМ ВНИЗ
            $(".fixed_aside").stop().animate({marginTop: currentScroll - offset.top});
            //console.log('DOWN');
            //console.log($(".left-box").height());
            $('.empty-fix').css('height', 20);
            console.log('offset', $('.fixed_aside').offset().top);
            //$(".right-box").height($(".left-box").height());
        }
        else if(currentScroll < prevScroll && currentScroll > offset.top) {
            // ЕДЕМ ВВЕРХ
            $(".fixed_aside").stop().animate({marginTop: currentScroll - offset.top});
            //console.log("UP");
            $('.empty-fix').css('height', 110);
            console.log('offset', $('.fixed_aside').offset().top);
        }
        prevScroll = currentScroll;
    });


    $('.more_button').click(function (e) {
        $('.big_text-box').css('overflow', 'none').css('height', 'auto');
        //$('.big_text-box').stop().animate({overflow: 'none', height: 'auto'});
        $('.more_button').remove();
        e.preventDefault();
    });

});

