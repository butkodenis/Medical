$(document).ready(function(){
    "use strict";
    $(".menubar-button").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("i", this).toggleClass("fa-bars fa-plus ");
        // $(".main-menu").addClass('mobile-menu');
    });


    // сщетчик
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});
