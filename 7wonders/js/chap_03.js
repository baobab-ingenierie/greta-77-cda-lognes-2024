// jQuery Cheat Sheet : https://oscarotero.com/jquery/

$(document).ready(function () {
    // Au survol des balises P
    $('p').mouseenter(function () {
        // this.style.backgroundColor='yellow';
        $(this).addClass('fond');
    });

    // A la sortie des balises P
    $('p').mouseleave(function () {
        $(this).removeClass('fond');
    });

    // Version optimisée !!!
    // Survol/Sortie des balises
    $('p').hover(
        function(){
            $(this).addClass('fond');
        },
        function(){
            $(this).removeClass('fond');
        })
});

// Déco
$('h2, p').attr('style', 'text-align:center;cursor:pointer');