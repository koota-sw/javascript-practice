$(function ()
{
    $('#chap1-tab')
        .on('click', function ()
        {
            $('#chap1').css('display', 'block');
            $('#chap2').css('display', 'none');
            $('#chap1-tab').addClass("active");
            $('#chap2-tab').removeClass("active");
        });
        
    $('#chap2-tab').on('click', function ()
    {
        $('#chap1').css('display', 'none');
        $('#chap2').css('display', 'block')
        $('#chap2-tab').addClass("active");
        $('#chap1-tab').removeClass("active");
    });
})