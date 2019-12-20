
function handleMenuIconClick(){
    //listen for click on burger icon
    // show main nav
    $('.navbar-toggle').on('click', function(event){
        $('.main-nav').show();
    })
}

// Only hide/show the menu if loaded on mobile
function handleMenuItemClick(){
    $(".nav-links").on('click', function(event){
        if ($(window).width() <= 768) {
        // debugger;
            $('.main-nav').hide();
        }
    });
}

// Call menu functions
$(function() {
    handleMenuIconClick()
    handleMenuItemClick()
});