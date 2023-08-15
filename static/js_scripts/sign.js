$('body').on('click', '.password-control', function(){
    if ($('#pass').attr('type') == 'password'){
        $(this).addClass('view');
        $('#pass').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('#pass').attr('type', 'password');
    }
    return false;
});
    function confirmyes(){
        if($('#confirmation-img').hasClass('valid')){
            $('#confirmation-img').removeClass('valid')
        }
        else {
            $('#confirmation-img').addClass('valid')
        }
    }
    function validpassword(){
        let password = $('#pass').val()
        if(password.length >= 8){
            $('#characters').addClass('valid')
        }
        if (password.length < 8){
            $('#characters').removeClass('valid')
        }
        if(password.length > 32){
            $('#characters').removeClass('valid')
        }
        if( password.match(/[a-z]/)){
            $('#lowercase').addClass('valid')
        }
        else{
            $('#lowercase').removeClass('valid')
        }
        if( password.match(/[A-Z]/)){
            $('#uppercase').addClass('valid')
        }
        else{
            $('#uppercase').removeClass('valid')
        }
        if( password.match(/[\0-9]/g)){
            $('#onenumber').addClass('valid')
        }
        else{
            $('#onenumber').removeClass('valid')
        }
    }
    function checkall(){
        if($('#onenumber').hasClass('valid')
            & $('#characters').hasClass('valid')
            & $('#uppercase').hasClass('valid')
            & $('#lowercase').hasClass('valid')
            & $('#confirmation-img').hasClass('valid')){
            $('.btn-sing').attr('type', 'submit');
        }
        else{
            $('.btn-sing').attr('type', 'button');
        }
    }
    
    