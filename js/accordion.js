/**
 * Created by apple on 14.04.16.
 */
$(document).ready(function() {

    $('.activeContent').show();

    $('.js-only-click-accordion').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('datamenuhref');
        console.log( currentAttrValue );
        console.log( $(this).is('.active') ); 

        if( ! $(this).is('.active') ){       

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).stop().slideDown(300).addClass('open');

        } else {

            $(this).removeClass('active');
            $('.accordion ' + currentAttrValue).slideUp(300).removeClass('open');

        }

        e.preventDefault();

    });
});
