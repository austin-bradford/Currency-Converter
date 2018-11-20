$(document).ready (function () {
    $('button').click(function () {
        $('.result').empty();
        let amount = $('.input-field').val();
        let firstChar = amount[0];
        if(isNaN(firstChar) && firstChar !== '.') {
            amount = amount.substring(1, amount.length);
        };
        if (isNaN(amount) || amount === '') {
            alert('Please enter a valid currency amount');
            return;
        };
        let convertFrom = ($('.convert-from option:selected').val() * amount).toFixed(2);
        let convertTo = $('.convert-to option:selected').val();
        let conversion = (convertFrom * convertTo).toFixed(2);
        
        
        $('.result').addClass('active').fadeIn('slow').append('<p>' + conversion +'</p>');         
    });
});