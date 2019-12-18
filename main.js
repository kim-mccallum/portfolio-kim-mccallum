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
    handleMenuClick();
    handleMenuItemClick();
});