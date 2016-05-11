
// F E  E V E N T  M A I N

// P A G E  L O A D
function feInit () {
setTimeout(function(){

	console.log( "after load" );
	
	var loader = fe.g("i","loader");
	loader.style.display = "none";

	// Smooth page loading
	var feWrapper  = fe.g("i","fe-wrapper");
	feWrapper.style.transition = "opacity " + fe_s.loadSpeed + "s";
	feWrapper.style.opacity = "1";

	// User events
	var headerLogo = fe.g("i","header_logo");
	if(screen.height < 800)	{
		headerLogo = fe.g("i","header_logo");
		headerLogo.style.padding = "25px 0px 22px";
	}

	var headerLogoImage = fe.g("i","header_logo_image");
	headerLogoImage.addEventListener("mouseover",function()	{
		var value = fe_g.logoDeg + 360;
		headerLogoImage.style.transform = "rotate(" + value.toString() + "deg)";
		headerLogoImage.style['-webkit-transform'] = "rotate(" + value.toString() + "deg)";		
		fe_g.logoDeg = fe_g.logoDeg + 360 ;
	});


}, 3500);
}
