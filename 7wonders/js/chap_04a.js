$(document).ready(function () {
    // Branche un écouteur d'événement sur PLUS GRAND
    $('#plus').on('click', function () {
        $('p').css('font-size', parseFloat($('p').css('font-size')) * 1.1);
        $('.zoom img').css('width', parseFloat($('.zoom img').css('width')) * 1.05);
    });

    // Branche un écouteur d'événement sur PLUS PETIT
    $('#moins').click(function () {
        $('p').css('font-size', parseFloat($('p').css('font-size')) * .9);
        $('.zoom img').css('width', parseFloat($('.zoom img').css('width')) * .95);
    });
});