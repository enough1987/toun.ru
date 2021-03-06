'use strict';

// controllers
taatrApp.controller("AppCtrl", function (
$scope, $location, $log) {

   $log.debug( $location.path() +" AppCtrl" );

});

taatrApp.controller("MainCtrl", function ($scope, 
$routeParams, $location, $route, $log,
$ocLazyLoad, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService ) {
  

   $log.debug( $location.path() +" MainCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );

   $scope.getPage = pageService.setup($scope);
   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge( "/content/go2json/first/global", 'global' );
   $scope.getPage( "/content/go2json/first/frontpage" );
   safeApply($scope);

   $scope.routeGoToView = routeService.setup();


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
$ocLazyLoad, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService) {

  $scope.getPage = pageService.setup($scope);
  $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);  
  $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        '/content/go2json/perfomance/'+$routeParams.perfomance);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html';
  $scope.page = true;
  safeApply($scope);  
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.subview = '/views/perfomance/subview.html';
  $scope.getPage("/content/go2json/perfomance/"+$routeParams.perfomance);
  safeApply($scope); 
  console.log( $scope.subview );
  
            }
        }
      }
  xhr.send();


   $log.debug( $location.path() +" PerfomanceCtrl" );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope );
   $log.debug( $routeParams.perfomance );



   $scope.routeGoToView = routeService.setup();



   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});


taatrApp.controller("ProjectsCtrl", function ($scope, $routeParams,
$location, $log,
$ocLazyLoad, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService,
getshoworhideFuncService) { 

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

   if ( subviews[$routeParams.project] ) {
      $scope.subview = subview; 
   } else {
      $scope.subview = '/views/global/404.html';
      $scope.page = true;
      safeApply($scope);  
   }


   $log.debug( $location.path() +" ProjectCtrl" );
   $log.debug( $routeParams.project );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

  $scope.getPage = pageService.setup($scope);
  $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);  
  $scope.getPageWithStoradge("/content/go2json/first/global", 'global');
  $scope.getPage("/content/go2json/projects/"+$routeParams.project);
  safeApply($scope);

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();


   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

   $scope.showorhide = getshoworhideFuncService.setup();

});

taatrApp.controller("PeopleCtrl", function ($scope, $routeParams,
$location, $log,
$ocLazyLoad, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService,
getshoworhideFuncService) { 

   $scope.getPage = pageService.setup($scope);
   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        '/content/go2json/people/'+$routeParams.people);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html';
  $scope.page = true; 
  safeApply($scope);  
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
    safeApply($scope);
            }
        }
      }
  xhr.send();

   $log.debug( $location.path() +" PeopleCtrl" );
   $log.debug( $routeParams.people );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();
   console.log( $scope.hash );
   

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

   $scope.showorhide = getshoworhideFuncService.setup();

});

taatrApp.controller("FestivalCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService) {

  $scope.getPage = pageService.setup($scope);
  $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
  $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        "/content/go2json/festival/"+$routeParams.festival);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  $scope.page = true;
  safeApply($scope); 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.subview = '/views/festival/subview.html';
  $scope.getPage("/content/go2json/festival/"+$routeParams.festival);
  safeApply($scope); 
  console.log( $scope.subview );
            }
        }
      }
  xhr.send(); 


   $log.debug( $location.path() +" FestivalCtrl" );
   $log.debug( $routeParams.festival );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();


   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };   
});


taatrApp.controller("RequestCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService) {

   $log.debug( $location.path() +" RequestCtrl" );
   $log.debug( $routeParams.request );

   $scope.getPage = pageService.setup($scope);
   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

   if(  $routeParams.request == 'awards' ||
        $routeParams.request == 'video'  ||
        $routeParams.request == 'library' ||
        $routeParams.request == 'documents' ||
        $routeParams.request == 'vacancy' ||
        $routeParams.request == 'press' ||
        $routeParams.request == 'partners' ||
        $routeParams.request == 'afisha' ||
        $routeParams.request == 'news'        
        ) {
      $scope.getPage("/content/go2json/request/"+$routeParams.request);
      $scope.subview = '/views/request/'+$routeParams.request+'.html';
      safeApply($scope); 
   } else {
      $scope.subview = '/views/global/404.html';
      $scope.page = true;
      safeApply($scope); 
   }  

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   console.log( 'hash  - '+ $scope.hash );
   

   $scope.showMonth = function( obj ) {  
        var bool = false;

            $scope.len = 0; 
            for(var prs in obj)  { 
                if(obj.hasOwnProperty(prs)) $scope.len++;
            } 
            bool = $scope.len >= 1 ? true : false; 

                
        return bool;
   };

  if ( $routeParams.request == 'news' ) {
    var intervalID = setInterval(function(){ 
      $scope.currentPage = 0;
      $scope.itemsPerPage = 5;
      
      if ( ! $scope.page ) { return '' };
      $scope.items = [];
      for(var prs in $scope.page['widget'])  {         
        
        if($scope.page['widget'].hasOwnProperty(prs)) {       
           $scope.items[prs] = $scope.page['widget'][prs];             
        };
      }  

      $scope.firstPage = function() {
        return $scope.currentPage == 0;
      }
      $scope.lastPage = function() {
        var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
        return $scope.currentPage == lastPageNum;
      }
      $scope.numberOfPages = function(){
        return Math.ceil($scope.items.length / $scope.itemsPerPage);
      }
      $scope.startingItem = function() {
        return $scope.currentPage * $scope.itemsPerPage;
      }
      $scope.pageBack = function() {
        $scope.currentPage = $scope.currentPage - 1;
      }
      $scope.pageForward = function() {
        $scope.currentPage = $scope.currentPage + 1;
      }
      console.log( 'pagination is good, all news are ' );
      console.log( $scope.items );
      
      clearInterval(intervalID); 
      safeApply($scope);
    }, 1000);
  }

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };


});

taatrApp.controller("PagesCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService) {

  $scope.getPage = pageService.setup($scope);
  $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
  $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        "/content/go2json/pages/"+$routeParams.pages);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  $scope.page = true;
  safeApply($scope); 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.getPage("/content/go2json/pages/"+$routeParams.pages);
  $scope.subview = '/views/pages/worldview_content.html'; 
  safeApply($scope); 
            }
        }
      }
  xhr.send(); 

   $log.debug( $location.path() +" PagesCtrl" );
   $log.debug( $routeParams.pages );
 

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   console.log( $scope.hash );
   

   $scope.changelanguagelocaly = function(cas){
      if(cas  == '1'){
        $('#lang1show').removeClass('gb-display-none').addClass('gb-display-block');
        $('#lang2show').removeClass('gb-display-block').addClass('gb-display-none'); 
        $('#lang3show').removeClass('gb-display-block').addClass('gb-display-none'); 
        $('#lang4show').removeClass('gb-display-block').addClass('gb-display-none');        
      }
      if(cas  == '2'){
        $('#lang1show').removeClass('gb-display-block').addClass('gb-display-none');
        $('#lang2show').removeClass('gb-display-none').addClass('gb-display-block'); 
        $('#lang3show').removeClass('gb-display-block').addClass('gb-display-none'); 
        $('#lang4show').removeClass('gb-display-block').addClass('gb-display-none');          
      } 
      if(cas  == '3'){
        $('#lang1show').removeClass('gb-display-block').addClass('gb-display-none');
        $('#lang2show').removeClass('gb-display-block').addClass('gb-display-none'); 
        $('#lang3show').removeClass('gb-display-none').addClass('gb-display-block'); 
        $('#lang4show').removeClass('gb-display-block').addClass('gb-display-none');          
      }
      if(cas  == '4'){
        $('#lang1show').removeClass('gb-display-block').addClass('gb-display-none');
        $('#lang2show').removeClass('gb-display-block').addClass('gb-display-none'); 
        $('#lang3show').removeClass('gb-display-block').addClass('gb-display-none'); 
        $('#lang4show').removeClass('gb-display-none').addClass('gb-display-block');          
      }     
   };

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});

taatrApp.controller("FeedbackCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService) {

  $scope.getPage = pageService.setup($scope);
  $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
  $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        "/content/go2json/feedback/"+$routeParams.feedback);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html';
  $scope.page = true; 
  safeApply($scope); 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.getPage("/content/go2json/feedback/"+$routeParams.feedback);
  safeApply($scope); 
  $scope.subview = '/views/feedback/feedback_content.html'; 
            }
        }
      }
  xhr.send(); 

   $log.debug( $location.path() +" FeedbackCtrl" );
   $log.debug( $routeParams.feedback );
 

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   console.log( $scope.hash );
   

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});



taatrApp.controller("SimpleCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService) {


  $scope.getPage = pageService.setup($scope);
  $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);
  $scope.getPageWithStoradge("/content/go2json/first/global", 'global');

  var xhr = new XMLHttpRequest();      
  xhr.open("POST", 
        "/content/go2json/simple/"+$routeParams.simple);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) {
  console.log('status ' + xhr.status);
  $scope.subview = '/views/global/404.html'; 
  $scope.page = true;
  safeApply($scope); 
  console.log( $scope.subview );   
            }
            else {
  console.log('status ' + xhr.status);              
  $scope.getPage("/content/go2json/simple/"+$routeParams.simple);
  safeApply($scope); 
  $scope.subview = '/views/simple/contacts_content.html'; 
            }
        }
      }
  xhr.send(); 

   $log.debug( $location.path() +" SimpleCtrl" );
   $log.debug( $routeParams.simple );
 
   $scope.changelanguage = languageService.change($scope);


   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();

   console.log( $scope.hash );
   

   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});


taatrApp.controller("TestCtrl", function ($scope, $location, $log,
$ocLazyLoad, $routeParams, safeApply,
ajaxService, localStorageService, languageService, pageService, routeService) { 

   $log.debug( $location.path() +" TestCtrl" );
   $log.debug( $routeParams );

   languageService.setup($scope);

   $scope.changelanguage = languageService.change($scope);

   $scope.getPage = pageService.setup($scope);
   $scope.getPageWithStoradge = pageService.setupWithStoradge($scope);

   $scope.getPageWithStoradge("/content/go2json/first/global", 'global');
   $scope.page = true;
   safeApply($scope);

   $scope.routeGoToView = routeService.setup();
   $scope.hash = routeService.gethash();


   $scope.test = function(item){
        console.log( item ); 
        return item;       
   };

});