$(document).ready(function(){
    "use strict";



    // анимация menu
    $(".menubar-button").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("i", this).toggleClass("fa-bars fa-plus ");

        // $(".main-menu").addClass('mobile-menu');
    });



    // плавная прокрутка
    $('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
        let target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
        return false;
    });




});
