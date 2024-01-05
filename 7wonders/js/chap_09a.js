$(document).ready(function () {
    // $('a[href^=http]').after('<img src="pics/external.png">');

    // OU BIEN

    $('a').filter(function () {
        return this.hostname !== location.hostname;
    }).after('<img src="pics/external.png">');
});