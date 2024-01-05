$(document).ready(function () {
    $('#menu li').css('position', 'relative').hover(
        function () {
            $(this).stop().animate({
                'left': '-=50px',
                'font-weight': 'bold',
                'border': 'solid #000 5px',
                'background': 'pink'
            }, 1000);
        },
        function () {
            $(this).stop().animate({
                'left': '0',
                'font-weight': 'none',
                'background': 'khaki'
            }, 1000);
        }
    );
});