$('#copy').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#text').text()).select();
    document.execCommand("copy");
    $temp.remove();
});