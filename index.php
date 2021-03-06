<?php
$global = file_get_contents("http://toun.ru/content/cache-change");
setcookie("cache", md5($global), time()+86400);
?>

<!DOCTYPE html>

<html  ng-app="TaatrApp">

	<head>

		<title> </title>

		<!-- META -->

		<meta charset="UTF-8" />
		<meta name=viewport content="width=device-width, initial-scale=1" />
		<meta name=”description” content=””/>
		<meta name=”robots” content=””     />

		<!-- CSS -->

	<link href="/css/fe.css"           		        rel="stylesheet" /> 
	<link href="/css/accordion.css"                 rel="stylesheet" />
	<link href="/css/main.css"         		        rel="stylesheet" />
	<link href="/css/perfomance.css"         		rel="stylesheet" />
    <link href="/css/global.css"   					rel="stylesheet" />
	<link href="/css/menu.css"                      rel="stylesheet" />
    <link href="/css/people_all_gallery.css"        rel="stylesheet" />
    <link href="/css/projects_gallery.css"          rel="stylesheet" />
    <link href="/css/contacts.css"                  rel="stylesheet" />
    <link href="/css/mass_media.css"                rel="stylesheet" />
    <link href="/css/white_space.css"     			rel="stylesheet" />
    <link href="/css/jobs_content.css"              rel="stylesheet" />
    <link href="/css/awards_content.css"            rel="stylesheet" />
    <link href="/css/documents_content.css"         rel="stylesheet" />
    <link href="/css/afisha.css"                    rel="stylesheet" />
    <link href="/css/feedback_content.css"  	    rel="stylesheet" />
    <link href="/css/about-actor22_content" 	    rel="stylesheet" />
    <link href="/css/videogallery_content.css" 		rel="stylesheet" />
    <link href="/css/library_content.css" 			rel="stylesheet" />
    <link href="/css/partners_content.css" 			rel="stylesheet" />
	<link href="/css/about-actor22_content.css"     rel="stylesheet" />
	<link href="/css/worldview-mns_content.css"     rel="stylesheet" />
    <link href="/css/news_content.css"              rel="stylesheet" />
    <link href="/css/easter_eggs_content.css"       rel="stylesheet" />

	<link href="/css/lib/owl.carousel.min.css"      rel="stylesheet" />
	<link href="/css/lib/lightgallery.min.css"      rel="stylesheet" />
	<link  href="/css/lib/APlayer.min.css"          rel="stylesheet" />


		<!-- JS -->
       
      	<script src="/js/lib/jquery.min.js"></script>
 		<script src="/js/lib/angular.min.js"></script>
		<script src="/js/lib/angular-sanitize.min.js"></script>
		<script src="/js/lib/angular-route.min.js"></script>
		<script src="/js/lib/angular-cookies.min.js"></script>
		<script src="/js/lib/ocLazyLoad.min.js"></script>

 		<script type="text/javascript" src="/js/app.js"></script>	
 		<script type="text/javascript" src="/js/directives/directives.js"></script> 	
 		<script type="text/javascript" src="/js/services/services.js"></script> 
 		<script type="text/javascript" src="/js/filters/filters.js"></script>  
 		<script type="text/javascript" src="/js/controllers/controllers.js"></script>


		<script type="text/javascript" src="/js/fe.js"></script>
		<script type="text/javascript" src="/js/fe-event-handler.js"></script>
		<script type="text/javascript" src="/js/fe-event-main.js"></script>

		<script src="/js/lib/lightgallery.min.js"></script>	
		<script src="/js/lib/jquery.waypoints.min.js"></script>	
		<script src="/js/lib/jquery.jplayer.min.js"></script>	
		<script src="/js/lib/owl.carousel.min.js"></script>	
		<script src="/js/lib/jquery.mousewheel.min.js"></script>	
		<script src="/js/lib/lg-thumbnail.min.js"></script>	
		<script src="/js/lib/lg-fullscreen.min.js"></script>	
		<script src="/js/lib/lg-video.js"></script>	
		<script src="/js/lib/APlayer.min.js"></script>	 

		<base href="/">

	</head>

	<body ng-cloak >

    	<div ng-view></div>

	</body>

</html>