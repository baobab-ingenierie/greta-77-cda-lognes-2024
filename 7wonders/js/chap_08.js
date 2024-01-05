$(document).ready(function () {
    $('h1').wrap('<div>').css('background', 'gold');

    $('p').append('<a href="#contenu" style="display:block;font-weight:bold">Haut de page</a>');

    $('body').prepend('<p>En-tête créé dynamiquement !</p>');
});