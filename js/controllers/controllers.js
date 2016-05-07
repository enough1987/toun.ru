'use strict';

// controllers
taatrApp.controller("AppCtrl", function (
$scope, $location, $route, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {

   $log.debug( $location.path() +" AppCtrl" );

});

taatrApp.controller("MainCtrl", function (
$scope, $location, $route, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {
  

   $log.debug( $location.path() +" MainCtrl" );

   languageService.setup($scope, localStorageService);

   $scope.changelanguage = languageService.change($scope, localStorageService,
    seoTagsService);

   $scope.getPage = pageService.setup($scope, localStorageService, ajaxService);

   $scope.getPage("/content/ru/go2json/frontpage/1", 'mainPage');

   $scope.routeGoToView = routeService.setup();
 
   seoTagsService.setup(localStorageService, 'mainPage');

   $scope.showMonth = function( obj, month ) {  
        var bool = false;
        if ( +month == 1) {
            $scope.first_len = 0; 
            for(var prs in obj)  { 
                if(obj.hasOwnProperty(prs)) $scope.first_len++;
            } 
bool = $scope.first_len >= 1 ? true : false; 
        }
        if ( +month == 2) { 
            $scope.second_len = 0; 
            for(var prs in obj)  { 
                if(obj.hasOwnProperty(prs)) $scope.second_len++;
            } 
bool = $scope.second_len >= 1 ? ( ($scope.first_len <= 11) ? 
    true : false ) : false;

        } 
        return bool;
   };

   $scope.showItemMonth = function(index, month){    
        var bool = false;
        if ( month == 1 ) {
bool = index <= 11 ? true : false ;
        }
        if ( month == 2 ) {
bool = index <= 11 ? ( ($scope.first_len <= 11) ? 
    true : false ): false ;
        }
        return bool;        
   };

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };
   $scope.debuger =  $location.path(); 

});

taatrApp.controller("PerfomanceCtrl", function ($scope, $location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {

   $log.debug( $location.path() +" PerfomanceCtrl" );

   languageService.setup($scope, localStorageService);

   $scope.changelanguage = languageService.change($scope, localStorageService,
    seoTagsService);

   $scope.getPage = pageService.setup($scope, localStorageService, ajaxService);

   $scope.getPage("/content/go2json/perfomance/25", 'perfomancePage');

   $scope.routeGoToView = routeService.setup();

   seoTagsService.setup(localStorageService, 'perfomancePage');


   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };
   $scope.debuger =  $location.path(); 

});



taatrApp.controller("RepertuarCtrl", function ($scope, $location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) { 

   $log.debug( $location.path() +" RepertuarCtrl" );

   languageService.setup($scope, localStorageService);

   $scope.changelanguage = languageService.change($scope, localStorageService,
    seoTagsService);

   $scope.getPage = pageService.setup($scope, localStorageService, ajaxService);

   $scope.getPage("/content/ru/go2json/frontpage/1", 'mainPage');

   $scope.routeGoToView = routeService.setup();
 
   seoTagsService.setup(localStorageService, 'mainPage');
});
