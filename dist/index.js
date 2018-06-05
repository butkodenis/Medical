$(document).ready(function(){
    "use strict";

    let show = true;
    let countbox = "#counts";
    $(window).on("scroll load resize", function(){
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        let w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        let e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        let w_height = $(window).height();        // Высота окна браузера
        let d_height = $(document).height();      // Высота всего документа
        let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 1500
            });
            show = false;
        }
    });



    $(".menubar-button").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("i", this).toggleClass("fa-bars fa-plus ");
        // $(".main-menu").addClass('mobile-menu');
    });




});