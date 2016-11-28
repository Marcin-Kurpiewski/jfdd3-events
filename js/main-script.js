'use strict';

$(document).ready(function(){
    $(".mobile-menu").on("click", function(){
        $(".menu").toggleClass("mobile-menu-open");

    });
    { $(".button-send").on("click", function(){
        $(".sign-nav-btn").remove();
        $(".game-nav-btn").append().css('display','block');
        console.log('click');

    })}
});
