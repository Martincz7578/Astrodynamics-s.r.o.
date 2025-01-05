$(document).ready(function(){
    var size = 0
    $('#home').click(function(){
        window.location.href = 'index.html';
    });
    $('#about').click(function(){
        window.location.href = 'about.html';
    });
    $('#contact').click(function(){
        window.location.href = 'contact.html';
    });
    $('#services').click(function(){
        window.location.href = 'services.html';
    });
    $('#Join_us').click(function(){
        window.location.href = 'join_us.html';
    });
    $('#Suggestions').click(function(){
        window.location.href = 'suggestions.html';
    });
    $('#size').click(function(){
        size++;
        if(size == 0){
            $('body').addClass('large');
            $('body').removeClass('small');
            $('#sizeus').text('Large');
        }
        else if(size == 1){
            $('body').addClass('xlarge');
            $('body').removeClass('large');
            $('#sizeus').text('XLarge');
        }
        else if(size == 2){
            $('body').addClass('xxlarge');
            $('body').removeClass('xlarge');
            $('#sizeus').text('XXLarge');
        }
        else if(size == 3){
            $('body').addClass('medium');
            $('body').removeClass('xxlarge');
            $('#sizeus').text('Medium');
        }
        else if(size == 4){
            $('body').addClass('small');
            $('body').removeClass('medium');
            $('#sizeus').text('Small');
        }
        else{
            size = 0;
            $('body').addClass('large');
            $('body').removeClass('small');
            $('#sizeus').text('Large');
        }

    });

    $(window).on('load', function(){
        $('body').addClass('large');
        $('#sizeus').text('Large');
    });
});
