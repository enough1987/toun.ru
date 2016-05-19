/**
 * Created by apple on 14.05.16.
 */

$(function () {
    var prevScroll = 0;
    var offset = $(".fixed_aside").offset();
    var topPadding;
    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();
        //console.log(270 + $('.big_text-box').height() - $('.aside-height').height());
        //console.log('ASIDE HEIGHT ' + $('.aside-height').height());
        //console.log('CURRENT SCROLL '+currentScroll);
        if ($( window ).width() > 950 && currentScroll < (270 + $('.big_text-box').height() - $('.aside-height').height())) { //на мобиле не елозим и задаем ограничитель, чтобы aside не вылетал вниз. 
            if (currentScroll > prevScroll && currentScroll > offset.top) {
                // ЕДЕМ ВНИЗ
                $(".fixed_aside").stop().animate({marginTop: currentScroll - offset.top});
                $('.empty-fix').css('height', 20);
                //console.log('offset', $('.fixed_aside').offset().top);
            }
            else if(currentScroll < prevScroll && currentScroll > offset.top) {
                // ЕДЕМ ВВЕРХ
                $(".fixed_aside").stop().animate({marginTop: currentScroll - offset.top});
                //console.log("UP");
                if (currentScroll > 350) {
                    $('.empty-fix').css('height', 110);    
                }
                else {
                    $('.empty-fix').css('height', 20);
                }
                //console.log(currentScroll);
                
                //console.log('offset', $('.fixed_aside').offset().top);
            }
        }
        prevScroll = currentScroll;
    });
    
    //var $bigTextBoxCurrentHeight = $('.big_text-box').css('height'); //сохраняем текущую высоту
    //var $bigTextBoxHeight = $('.big_text-box').css('height', '100%').css('height');  //сохраняем 100% высоту блока в пикселях
    //$('.big_text-box').css('height', $bigTextBoxCurrentHeight); //возвращаем прежнюю высоту
    
    //$('.more_button').click(function (e) {
    //    $('.big_text-box').css('transition', 'all 5s').css('overflow', 'none').css('height', $bigTextBoxHeight); //запускаем анимацию разворачивания блока на 100%
    //    $('.more_button').remove();
    //    e.preventDefault();
    //});
    
    $('.more_button').click(function (e) {
        $('.big_text-box').css('overflow', 'none').css('height', 'auto');
        //$('.big_text-box').stop().animate({overflow: 'none', height: 'auto'});
        $('.more_button').remove();
        e.preventDefault();
    });

});

