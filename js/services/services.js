'use strict';

// services

customServices.factory('ajaxService', function ($http) {
    return {

        get: function(fileName, func) {
            $http.get(fileName).
            then(function successCallback(response) {
                    func(response.data);
            }, function errorCallback (response) {
                console.log( response );
            });
        },
        post: function(fileName, func) { 
            $http.post( fileName ).
            then(function successCallback(response) {
                    func(response.data);
            }, function errorCallback (response) {
                console.log( response );
            });  ;
        } 

    }
});

customServices.factory('localStorageService', function () {
    return {

        set: function(name, data) {
            try {
                window.localStorage.setItem( name, JSON.stringify(data) );
            } catch(e) {
                console.log( e ); 
            }
        },
        get: function(name) {
            return JSON.parse ( window.localStorage.getItem(name) );
        }

    }
});

customServices.factory('languageService', function (
    localStorageService, seoTagsService) {
    return {
        setup: function(scope) {
            scope.languages = [];
            scope.languages['en'] = 'field_lang_en';
            scope.languages['ru'] = 'field_lang_ru';
            scope.languages['mns'] = 'field_lang_mns';
            scope.languages['kh'] = 'field_lang_kh';
           
            if ( !localStorageService.get('language1') || 
                !localStorageService.get('language2') ) {
                localStorageService.set('language1','ru');
                scope.language1 = localStorageService.get('language1');
                localStorageService.set('language2','mns');
                scope.language2 = localStorageService.get('language2');
            } else {
                scope.language1 = localStorageService.get('language1');
                scope.language2 = localStorageService.get('language2');
            }        
        },
        change: function(scope) {
            return function(lang, langcase ){        
                if( langcase == 1 ) {
                    localStorageService.set('language1',lang);
                    scope.language1 = localStorageService.get('language1');
                }   
                if( langcase == 2 ) {
                    localStorageService.set('language2',lang);
                    scope.language2 = localStorageService.get('language2');
                }  
                seoTagsService.setup(localStorageService, 'mainPage');     
            } 
        } 

    }
});

customServices.factory('pageService', function (
    localStorageService, ajaxService) {
    return {

        setup: function(scope){
            return function(json) {
                console.log( 'try to get json' );                
                    ajaxService.post(json, function(data){                 
                        scope['page'] = data;
                console.log( 'got json' ); 
                console.log( 'page' + " : ");                         
                console.log( scope['page'] );  
                        localStorageService.set('page', scope['page'] );
                        return scope['page'];                      
                    }); 

            }
        },
        setupWithStoradge: function(scope){
            return function(json, nameOfPage) {

                if ( localStorageService.get(nameOfPage) ) {
                    scope[nameOfPage] = localStorageService.get(nameOfPage); 
                console.log( 'got json from storadge' );                      
                console.log( nameOfPage + " : "); 
                console.log( scope[nameOfPage] );
                    return scope[nameOfPage];
                }

                console.log( 'try to get json' );                
                    ajaxService.post(json, function(data){                 
                        scope[nameOfPage] = data;
                console.log( 'got json' ); 
                console.log( nameOfPage + " : ");                         
                console.log( scope[nameOfPage] );  
                        localStorageService.set(nameOfPage, scope[nameOfPage] );
                        return scope[nameOfPage];                      
                    }); 

            }
        }

    }
});


customServices.factory('routeService', function ($location, $log) {
    return {

        setup: function(){
            return function(path) {
                $log.debug( "go to rout" + " ' "+ path + " ' " );
                $location.path(path);
                $location.hash('');

            }
        },
        gethash: function(){
            // hash()/hash(target) возвращает или устанавливает hash секцию url         
            return $location.hash();

        }

    }
});


customServices.factory('seoTagsService', function (localStorageService) {
    return {

        setup: function(name){

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

        }

    }
});


customServices.factory('getshoworhideFuncService', function ($location) {
    return {

        setup: function(){

            function showorhide (hash, value) {

                if ( hash != this.showorhide.oldhash) {
                   this.showorhide.notexistblock = false 
                };
                
                
                var bool = !isNaN(parseFloat(hash)) && isFinite(hash);
                var go = hash ==  '' ? true  : ( !bool ||
                hash == value ? true : false );
                if ( go ) { 
                    this.showorhide.notexistblock = go;
                };
                return go;

            };
            showorhide.notexistblock = false;
            showorhide.oldhash = $location.hash();
            return showorhide;
        }

    }
});


customServices.factory('feInitService', function ($location) {
    return {

        setup: function(){

function feInit() {
    console.log( " feInitService started" );

    if( ! fe.g("i","loader") || 
        ! fe.g("i","fe-wrapper") ||
        ! fe.g("i","videoid")
        ) {

        setTimeout(function(){
            feInit();
        }, 500); 
    }
    
    var loader = fe.g("i","loader");
    loader.style.display = "none";

    // Smooth page loading
    var feWrapper  = fe.g("i","fe-wrapper");
    feWrapper.style.transition = "opacity " + fe_s.loadSpeed + "s";
    feWrapper.style.opacity = "1";

    // User events
    var headerLogo = fe.g("i","header_logo");
    if(screen.height < 800) {
        headerLogo = fe.g("i","header_logo");
        headerLogo.style.padding = "25px 0px 22px";
    } 

    var headerLogoImage = fe.g("i","header_logo_image");
    headerLogoImage.addEventListener("mouseover",function() {
        var value = fe_g.logoDeg + 360;
        headerLogoImage.style.transform = "rotate(" + value.toString() + "deg)";
        headerLogoImage.style['-webkit-transform'] = "rotate(" + value.toString() + "deg)";     
        fe_g.logoDeg = fe_g.logoDeg + 360 ;
    });
}

 setTimeout(function(){
            feInit();
 }, 3500);
 
          

        }

    }
});



