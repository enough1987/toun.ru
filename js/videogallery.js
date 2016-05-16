/**
 * Created by apple on 12.05.16.
 */
$(document).ready(function() {

    // Y O U T U B E  V I D E O
    $('.videogallery').lightGallery({
        selector: '.light-gal-item',
        download: false,
        thumbnail: 0,
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            controls: 1
        }
    });


});