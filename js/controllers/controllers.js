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
  $scope.getPage("/content/go2json/perfomance/"+$routeParams.perfomance); 
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

   seoTagsService.setup();


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
   $scope.getPage("/content/go2json/projects/"+$routeParams.project);

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();


   seoTagsService.setup();

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

   $scope.showorhide = getshoworhideFuncService.setup();

});

taatrApp.controller("PeopleCtrl", function ($scope, $routeParams,
$location, $log,
$ocLazyLoad,
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService, getshoworhideFuncService) { 

  $scope.getPage = pageService.setup($scope);
  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        '/content/go2json/people/'+$routeParams.people);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  if( !isNaN(parseFloat($routeParams.people)) && 
  isFinite($routeParams.people) ) {
      $scope.subview = '/views/people/number.html';
      console.log( $scope.subview );
          
  } else {
      $scope.subview = '/views/people/notnumber.html'; 
      console.log( $scope.subview );
  }
  $scope.getPage("/content/go2json/people/"+$routeParams.people); 
            }
        }
      }
  xhr.send();

   $log.debug( $location.path() +" PeopleCtrl" );
   $log.debug( $routeParams.people );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();
   console.log( $scope.hash );
   

   seoTagsService.setup();

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
  $scope.getPage("/content/go2json/festival/"+$routeParams.festival); 
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

   seoTagsService.setup();

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };   
});


taatrApp.controller("RequestCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, 
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {

   $log.debug( $location.path() +" RequestCtrl" );
   $log.debug( $routeParams.request );

   $scope.getPage = pageService.setup($scope);

   if(  $routeParams.request == 'awards' ||
        $routeParams.request == 'video'  ||
        $routeParams.request == 'library' ||
        $routeParams.request == 'documents' ||
        $routeParams.request == 'vacancy' ||
        $routeParams.request == 'press' ||
        $routeParams.request == 'partners'
        ) {
      $scope.getPage("/content/go2json/request/"+$routeParams.request);
      $scope.subview = '/views/request/'+$routeParams.request+'.html'; 
   } else {
      $scope.subview = '/views/global/404.html'; 
   }  

   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   console.log( $scope.hash );
   

   seoTagsService.setup();

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };


});

taatrApp.controller("PagesCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, 
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {

  $scope.getPage = pageService.setup($scope);
  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        "/content/go2json/pages/"+$routeParams.pages);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.getPage("/content/go2json/pages/"+$routeParams.pages); 
  $scope.subview = '/views/pages/worldview_content.html'; 
            }
        }
      }
  xhr.send(); 

   $log.debug( $location.path() +" PagesCtrl" );
   $log.debug( $routeParams.pages );
 

   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   console.log( $scope.hash );
   

   seoTagsService.setup();

   $scope.changelanguagelocaly = function(cas){
      if(cas  == '2'){
        $('#lang1show').removeClass('gb-display-block').addClass('gb-display-none');
        $('#lang2show').addClass('gb-display-block').removeClass('gb-display-none');        
      }
      if(cas  == '1'){
        $('#lang2show').removeClass('gb-display-block').addClass('gb-display-none');
        $('#lang1show').addClass('gb-display-block').removeClass('gb-display-none');        
      }      
   };

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});

taatrApp.controller("FeedbackCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, 
ajaxService, localStorageService, languageService, pageService, routeService,
seoTagsService) {

  $scope.getPage = pageService.setup($scope);
  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        "/content/go2json/feedback/"+$routeParams.feedback);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.getPage("/content/go2json/feedback/"+$routeParams.feedback); 
  $scope.subview = '/views/feedback/feedback_content.html'; 
            }
        }
      }
  xhr.send(); 

   $log.debug( $location.path() +" FeedbackCtrl" );
   $log.debug( $routeParams.feedback );
 

   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   console.log( $scope.hash );
   

   seoTagsService.setup();

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