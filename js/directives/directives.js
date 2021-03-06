'use strict';

// directives


customDirectives.directive('cssLazyLoad', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {
                element.ready(function () {

    var href = attr['href'];

    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = href;

    var head = document.getElementsByTagName('head')[0];
    
    head.appendChild(link);        


                });
        }
    }
});



customDirectives.directive('jsLazyLoad', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {
                element.ready(function () {

    var src = attr['src'];

    var script = document.createElement('script');
    script.src = src;

    var head = document.getElementsByTagName('head')[0];
    
    head.appendChild(script);        


                });
        }
    }
});

customDirectives.directive('setAtrForMenuDir', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {
                element.ready(function () {

    if ( attr['datamenuhref'] ) {
        element.attr( 'datamenuhref', scope.itemofmenu );
    }
    if ( attr['datamenuid'] ) {
        element.attr( 'id', scope.itemofmenu.slice(1) );
    }
    
                });
        }
    }
});

customDirectives.directive('videoSetDir', function () {
    return {
        restrict: "A",
        scope : false,
        link: function (scope, element, attr) {
            element.ready(function () {



                var intervalID = setInterval(function(){ 
if(!scope['page']) { return '' }                            
if(!scope['page']['lenta']) { return '' }  


    var fild = attr['fildname'];
    var id = attr['videoid'];
    var video = document.getElementById(id);
    if ( video.getAttribute('itisdone') ) { 
        clearInterval(intervalID) 
        return '';
    }
    var source = document.createElement('source');
    source.setAttribute('src', scope['page']['lenta'][fild]);
    video.appendChild(source);
    video.setAttribute('itisdone', ' true ')
    clearInterval(intervalID);    
    video.play(); 


                }, 500 );
            });
        }
    }
});


customDirectives.directive('imgSetDir', function () {
    return {
        restrict: "A",
        scope : false,
        link: function (scope, element, attr) {
                element.ready(function () {


                    var intervalID = setInterval(function(){ 
if(!scope['page']) { return '' }                         
if(!scope['page']['lenta']) { return '' }   
if( element.attr('src') ) {  
        clearInterval(intervalID) 
        return '';
}
     
    var fild = attr['fildname'];
    element.attr('src', scope['page']['lenta'][fild]);
    clearInterval(intervalID);
                    }, 1000 );                     


                    });
                }
        }
});


customDirectives.directive('audioPlayerDir', function () {
    return {
        restrict: "A",
        scope : false,
        link: function (scope, element, attr) {
                element.ready(function () {


                    var intervalID = setInterval(function(){ 
try {


if( ! element.attr('audio-player-dir')             ) { return '' } 
if( ! JSON.parse(element.attr('audio-player-dir')) ) { return '' }                         

if( element.attr('data-audio-player-done') ) {  
        clearInterval(intervalID); 
        return '';
}   

var arr = [];
var all = JSON.parse(element.attr('audio-player-dir'));
for (var i = all.length - 1; i >= 0; i--) {
arr.push({
            title: all[i]['description'],
            author: '',
            url: all[i]['uri']
        });

}

/* 
        https://github.com/DIYgod/APlayer
        http://www.jqueryrain.com/?eaSgq611
*/

var app = new APlayer({
    element: document.getElementById('audioplayer'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#ad7a86',
    music: arr
});
app.init();
element.attr('data-audio-player-done', 'true');
clearInterval(intervalID); 
} catch(e) {
    console.log( e ); 
}        
                    }, 2000 );                     


                    });
                }
        }
});

customDirectives.directive( 'customSubmitDir' , function()
{
    return {
        restrict: 'A',
        link: function( scope , element , attributes ) {
            
            element.bind( 'submit' , function( e ) {

e.preventDefault();


console.log( e );
console.log( 'Name is :' );
console.log( e.target[0].value );
console.log( 'Comment is :' );
console.log( e.target[1].value );
console.log( 'Id of page is :' );
console.log( e.target[0].alt );

var  name = e.target[0].value;
var  text = e.target[1].value;
var  id = e.target[0].alt

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/content/go2json/comment_add/"+id);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if ( xhr.status != 200) {
                        alert( 'что то пошло не так, повторите попытку' );                    
                    } else {
                        // xhr.responseText
                        alert( 'Ваше сообщение отправлено' );
                        e.target[0].value = '';
                        e.target[1].value = '';  
                    }         
                } 
            }
            xhr.send("name="+name+"&text="+text);

            });               

        }
    };
});



customDirectives.directive('tabsJqueryPlaginsInitDir', function () {
    return {
        restrict: "A",
        scope : false,
        link: function (scope, element, attr) {
                element.ready(function () {

var numOfTry = 0;

function JqueryPlaginsInit (){


if( numOfTry > 12) {
    numOfTry = 0;
    clearInterval(intervalID); 
    return '';
}
numOfTry++;

if( ! element.attr('tabs-jquery-plagins-init-dir') ) {    
    console.log( 'page is not exist, so Jquery plagins can not be start' );    
    return '' 
}


if( 
    ! $('*').is('.owl-carousel') ||
    ! $('*').is('.next-button') ||
    ! $('*').is('.prev-button') 
  ) {
    console.log('/.owl-carousel or .next-button or .prev-button/ are not exist, so jquery plagins can not be start');
    return '';  
}
else if( 
    ! $('*').is('#lightgallery')  || 
    ! $('*').is('#lightgallery2') ||
    ! $('*').is('#video-gallery') ||
    ! $('*').is('#video-gallery2')
  ) {
    console.log('/#lightgallery or #lightgallery2 or #video-gallery or #video-gallery2/ are not exist, so jquery plagins can not be start');
    return '';   
} 
else  {
    console.log( 'jquery plagins are going' );    
}

    // T A B S
    $('.tabs-links li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('datahref');
       

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // T A B S
    $('.tabs-links li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('datahref');
       console.log( 'tabs are going' );
       

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // From accordion js for accordion is needed

    $('.activeContent').show();

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('datahref');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).stop().slideDown(300).addClass('open');
        }

        e.preventDefault();
    });



    // O W L  C A R O U S E L
    var $owl = $('.owl-carousel');
    $owl.owlCarousel({
        loop: false, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        video: true,
        videoWidth: false, // Default false; Type: Boolean/Number
        videoHeight: false, // Default false; Type: Boolean/Number
        //center:true,
        lazyLoad: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 5
            }
        }
    });

    // Go to the next item
    $('.next-button').click(function() {
        $owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.prev-button').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $owl.trigger('prev.owl.carousel', [300]);
    });


    /*
    if ( $('*').is('.owl-carousel-top') ){

    // O W L  C A R O U S E L  F I X
    $(window).resize(function () {
        console.log( 'O W L  C A R O U S E L  F I X' );
        
        $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();
    });

    }
    */

    // L I G H T  G A L L E R Y
    // P H O T O
    $('#lightgallery, #lightgallery2').lightGallery({
        selector: '.item',
        download: false,
        thumbnail: 0
    });

    // Y O U T U B E  V I D E O
    $('#video-gallery, #video-gallery2').lightGallery({
        selector: '.light-gal-item',
        download: false,
        thumbnail: 0,
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            controls: 1
        }
    });
    numOfTry = 0;
    clearInterval(intervalID); 

}


    var intervalID = setInterval(function(){ 
        try {
            JqueryPlaginsInit ();
        } catch(e) {
            console.log( e ); 
        }        
    }, 3000 );


    var intervalID2 = setInterval(function(){ 
    
if( ! document.querySelectorAll('[dircanbestart]') ) { return '' };

var targets = document.querySelectorAll('[datatargetfortabs]') ;

for (var i = 0; i < targets.length; i++) {
    if( targets[i].getAttribute('dataa') ){
        var  currentAttrValue = targets[i].getAttribute('datatargetfortabs');
        $('.tabs ' + currentAttrValue).show().siblings().hide();
        clearInterval(intervalID2); 

        break;        
    };           
}

    }, 3000 );                     


                    });
                }
        }
});


customDirectives.directive('displayNoneDir', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function displayNoneDir(scope, element, attr) {
                element.ready(function () {

var intervalID = setInterval(function(){ 
 
if( ! attr['dircanbestart'] ) { return '' };

if ( attr["dataa"] ) {
    element.removeAttr( 'gb-display-none' );
} else {
    element.addClass( 'gb-display-none' ); 
}    
    clearInterval(intervalID);


}, 3000 ); 
                });
        }
    }
});


customDirectives.directive('noneIfRuDir', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function displayNoneDir(scope, element, attr) {
                element.ready(function () {
                    console.log( scope.languages[scope.language1] );                    
                    if( scope.languages[scope.language1] != 'field_lang_ru' ){
                        element.addClass('gb-display-none');                      
                    }
                });
        }
    }
});

customDirectives.directive('noneIfEnDir', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function displayNoneDir(scope, element, attr) {
                element.ready(function () {                  
                    if( scope.languages[scope.language1] != 'field_lang_en' ){
                        element.addClass('gb-display-none');                      
                    }
                });
        }
    }
});


customDirectives.directive('initFeJsDir', function () {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {

                element.ready(function () {

                    feInit2(); 

                });
                
        }
    }
});

customDirectives.directive('seoDir', function (localStorageService) {
    return {
        restrict: 'A', 
        scope : false,       
        link: function (scope, element, attr) {

                element.ready(function () {

$( 'title' ).html( '' );
$( 'meta[name="description"]' ).attr('description', '' );  

function seo (){
    if ( ! attr['start'] ) { return ''};
    if ( !name ) { var name  = 'page' };
    var ar = [];
    ar['en'] = 'field_lang_en';
    ar['ru'] = 'field_lang_ru';

    var page = localStorageService.get(name);
    if ( ! page ) { return false };
    var lang = localStorageService.get('language1');
    if ( ! lang ) { return false };

    if ( ! page['seo'] ) { return false };    

    $( 'title' ).html( page['seo'][ar[lang]]['title'] );
    $( 'meta[name="description"]' ).attr('description',
    page['seo'][ar[lang]]['description'] );  
    clearInterval(intervalID);
    console.log( 'seo is done' );
          
}

var intervalID = setInterval(function(){ 
    seo();
}, 500 ); 


                });
                
        }
    }
});
