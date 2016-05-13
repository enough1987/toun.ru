'use strict';

// controllers
taatrApp.controller("AppCtrl", function (
$scope, $location, $log) {

   $log.debug( $location.path() +" AppCtrl" );

});

taatrApp.controller("MainCtrl", function ($scope, 
$routeParams, $location, $route, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService, feInitService) {
  

   $log.debug( $location.path() +" MainCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );

   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');
   $scope.getPageWithStoradge("/content/go2json/first/frontpage", 'mainPage');

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

  $scope.getPage = pageService.setup($scope);
  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        '/content/go2json/perfomance/'+$routeParams.perfomance);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.subview = '/views/perfomance/subview.html';
  $scope.getPage("/content/go2json/perfomance/"+$routeParams.perfomance, 
    'perfomance'); 
  console.log( $scope.subview );
            }
        }
      }
  xhr.send();


   $log.debug( $location.path() +" PerfomanceCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );
   $log.debug( $routeParams.perfomance );


   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');


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
   subviews ['new'] = 'notsort'; 
   subviews ['repertuar'] = 'sort';
   subviews ['premier'] = 'sort';
   subviews ['tour'] = 'sort';
   subviews ['perfomance'] = 'sort';
   subviews ['special'] = 'sort';

   if ( subviews[$routeParams.project] == 'notsort' ) {
      var subview = '/views/projects/notsort.html';  
   } else {
      var subview = '/views/projects/sort.html'; 
   }

   subviews[$routeParams.project] ?
   $scope.subview = subview : 
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

taatrApp.controller("FestivalCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {


  $scope.getPage = pageService.setup($scope);
  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        "/content/go2json/festival/"+$routeParams.festival);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.subview = '/views/festival/subview.html';
  $scope.getPage("/content/go2json/festival/"+$routeParams.festival, 
    'festival'); 
  console.log( $scope.subview );
            }
        }
      }
  xhr.send(); 


   $log.debug( $location.path() +" FestivalCtrl" );
   $log.debug( $routeParams.festival );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   seoTagsService.setup('festival');

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };
   

});


taatrApp.controller("TestCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) { 

   $log.debug( $location.path() +" TestCtrl" );
   $log.debug( $routeParams.project );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');
   $scope.getPageWithStoradge("/content/go2json/first/frontpage", 'mainPage');

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();


   seoTagsService.setup('mainPage');

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});