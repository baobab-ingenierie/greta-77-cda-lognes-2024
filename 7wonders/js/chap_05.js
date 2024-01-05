$(document).ready(function () {
    $('p').on('mouseenter mouseleave', function () {
        $(this).toggleClass('over');
    });

    $('#wonder1').one('click', function () {
        window.open('chap_04.html', 'idPopup', 'popup');
    });
});