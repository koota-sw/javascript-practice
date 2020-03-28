$(function ()
{
    $('#chap1').css('color', '#ffffff');
    $('#chap1').on('mouseover', function ()
    {
        $('#chap1').css('color', '#ebc000');
    });
    $('#chap1 .hello').css({
        transform: 'rotate(10deg)',
        opacity: 0.5
    })
});