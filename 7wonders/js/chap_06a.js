$(document).ready(function () {
    $('.image').fadeTo('fast', .25).hover(
        function () {
            $(this).stop().fadeTo('slow', 1)
        },
        function () {
            $(this).stop().fadeTo('slow', .25)
        }
    )
});