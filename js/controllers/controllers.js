'use strict';

// controllers
taatrApp.controller("AppCtrl", function (
$scope, $location, $log) {

   $log.debug( $location.path() +" AppCtrl" );

});

taatrApp.controller("MainCtrl", function (
$scope, $location, $route, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService, feInitService) {
  

   $log.debug( $location.path() +" MainCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );

   $scope.getPage = pageService.setup($scope);

   $scope.global = $scope.getPage("/content/go2json/first/global", 'global');
   $scope.page = $scope.getPage("/content/go2json/first/frontpage", 'mainPage');

   $scope.routeGoToView = routeService.setup();
 
   seoTagsService.setup( 'mainPage');

   feInitService.setup();

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


});

taatrApp.controller("PerfomanceCtrl", function ($scope, $routeParams,
$location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {


   var subviews = [];
   subviews ['25'] = true; 

   subviews[$routeParams.perfomance] ?
   $scope.subview = '/views/perfomance/'+ $routeParams.perfomance +'.html':
   $scope.subview = '/views/global/404.html';  

   $log.debug( $location.path() +" PerfomanceCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );
   $log.debug( $routeParams.perfomance );

   $scope.getPage = pageService.setup($scope);
   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');
   $scope.getPage("/content/go2json/perfomance/"+$routeParams.perfomance, 
    'perfomance');

   $scope.routeGoToView = routeService.setup();

   seoTagsService.setup('perfomance');


   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});


taatrApp.controller("ProjectsCtrl", function ($scope, $routeParams,
$location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService, getshoworhideFuncService) { 

   var subviews = [];
   subviews ['new'] = true; 
   subviews ['repertuar'] = true;


   subviews[$routeParams.project] ?
   $scope.subview = '/views/projects/'+ $routeParams.project +'.html':
   $scope.subview = '/views/global/404.html';


   $log.debug( $location.path() +" ProjectCtrl" );
   $log.debug( $routeParams.project );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPage = pageService.setup($scope);
   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');
   $scope.getPage("/content/go2json/projects/"+$routeParams.project, 'projects');

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();


   seoTagsService.setup('projects');

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

   $scope.showorhide = getshoworhideFuncService.setup();

});


taatrApp.controller("TestCtrl", function ($scope, $location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) { 

   $log.debug( $location.path() +" PeopleallCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPage = pageService.setup($scope);

   $scope.global = $scope.getPage("/content/go2json/first/global", 'global');
   $scope.getPage("/content/go2json/first/frontpage", 'mainPage');

   $scope.routeGoToView = routeService.setup();
 
   seoTagsService.setup('mainPage');

});