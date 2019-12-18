function handleMenuClick(){
    $('.menu-btn').on('click', function(event){
        $('.topnav').show();
        $('.menu-btn').hide();
    })
}

function handleMenuItemClick(){
    $('.topnav').on('click', 'li', function(event){
        $('.topnav').hide();
        $('.menu-btn').show();
    })
}

$(function () {
    if ($(window).width() <= 775) {
      $('.topnav').hide();
      handleMenuClick();
      handleMenuItemClick();
    } else {
      $('.menu-btn').hide();
    }
});