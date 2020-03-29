$(function ()
{
    $('.hello')
        .css({
            top: '-100px',
            color: 'white',
            transform: 'rotate(10deg)',
        })
        .on('mouseover', function ()
        {
            $('#chap1').css('background-color', '#ae5e9b');
            $('header').css('color', '#ae5e9b');
        })
        .on('mouseout', function ()
        {
            $('#chap1').css('background-color', 'rgb(34, 105, 236)');
            $('header').css('color', 'black');
        })
        .on('click', function ()
        {
            $('.hello').animate({
                top: '100px',
                color: '#ebc000',
                opacity: 0,
                fontSize: '0px'
            },
                1500,
                'linear'
            );
        });
});