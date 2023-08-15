$(".burger-checkbox").click(function() {
    $(".burger-menu-container").toggleClass("active");
});
function openselect(){
    if($('#select').hasClass('view')){
        $('#select').removeClass('view')
    }
    else{
        $('#select').addClass('view')
    }
}