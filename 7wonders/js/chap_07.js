$(document).ready(function () {
    $('#galerie a').append('<span>').hover(
        function () {
            $(this).children('span').stop().fadeIn();
        },
        function () {
            $(this).children('span').stop().fadeOut();
        }
    );
});