$(document).ready(function () {
    // Remplace le titre
    // $('#titreCV').text('Aventurière et archéologue');
    // $('#titreCV').css('visibility','visible');
    $('#titreCV').text('Aventurière et archéologue').css('visibility', 'visible');

    // Remplace DDN par AGE
    let dob = $('#divAge').text().split('/');
    let age = Math.floor((new Date() - new Date(parseInt(dob[2]), parseInt(dob[1]) - 1, parseInt(dob[0]))) / 1000 / 60 / 60 / 24 / 365.25) + ' ans';
    $('#divAge').text(age);

    // Déco
    $('.titreSection').css('background-color', 'pink');
    $('.dateCV').css('font-weight', 'bold');
});