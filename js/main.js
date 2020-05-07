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


$(function () //chap2のアニメーション
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
    
    $('.btn-line2 button')
        .on('mouseover', function ()
        {
            $(this).stop(true).animate({
                borderWidth: '12px',
                color: '#ae5e9b'
            }, anitime, 'easeOutSine');
        })
        .on('mouseout', function ()
        {
            $(this).stop(true).animate({
                borderWidth: '0px',
                color: 'rgba(255, 166, 0, 0.966)'
            }, anitime, 'easeOutSine');
        });
    
    $('.btn-line3 button')
        .on('mouseenter', function ()
        {
            $(this).find('> span').stop(true).animate({
                width: '100%'
            }, anitime, 'easeOutQuad');
        })
        .on('mouseleave', function ()
        {
            $(this).find('> span').stop(true).animate({
                width: '0%'
            }, anitime, 'easeOutQuad');
        });
});