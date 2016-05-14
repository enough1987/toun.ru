



$(function() {
 
  if ( document.getElementById('content') ) {
  console.log( "waypoint are going" );     
  var waypoint = new Waypoint({
    element: document.getElementById('content'),
    handler: function(direction) {
      $('#menuTop').removeClass('menu-hide');
      if ($('#menu-small').css('display') == 'none') {
        $('#small-menu-buttton').toggleClass('inverse-small-menu-buttton');
      }
    },
    offset: 180
  });
  }else {
    console.log( "waypoint has no id content, so waypoint are not going " );    
  }
 
});

