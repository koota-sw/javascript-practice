$(function ()
{
    $('#chap1').css('color', 'white');
    $('.hello')
        .on('mouseover', function ()
        {
            $('.hello').css('color', '#ebc000');
            $('#chap1').css('background-color', '#ae5e9b');
            $('header').css('color', '#ae5e9b');
        })
        .on('mouseout', function ()
        {
            $('.hello').css('color', 'white');
            $('#chap1').css('background-color', 'rgb(34, 105, 236)');
            $('header').css('color', 'black');
        })
        .css({
            transform: 'rotate(10deg)',
            opacity: 0.5
        });
});