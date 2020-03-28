$(function ()
{
    $('#chap1').css('color', '#ffffff');
    $('.hello').on('click', function ()
    {
        $('.hello').css('color', '#ebc000');
        $('#chap1').css('background-color', '#ae5e9b');
        $('header').css('color', '#ae5e9b');
    });
    $('#chap1 .hello').css({
        transform: 'rotate(10deg)',
        opacity: 0.5
    })
});