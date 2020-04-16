$(function () //chap1のアニメーション
{
    $('.hello')
        .css({
            top: '10%',
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
                top: '80%',
                color: '#ebc000',
                opacity: 0.5
            },
                1500,
                'linear',
                function ()
                {
                    $('.hello').animate({
                        top: '50%'
                    },
                        500
                    );
                }
            );
        });
});


$(function ()
{
    const anitime = 500;

    $('.btn-line1 button')
        .on('mouseover', function ()
        {
            $(this).stop(true).animate({
                backgroundColor: '#ae5e9b',
                color: '#fff'
            }, anitime);
        })
        .on('mouseout', function ()
        {
            $(this).stop(true).animate({
                backgroundColor: '#fff',
                color: 'rgba(255, 166, 0, 0.966)'
            }, anitime);
        });
});