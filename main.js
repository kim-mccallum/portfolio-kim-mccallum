// function handleMenuClick(){
//     $('.menu-btn').on('click', function(event){
//         $('.topnav').show();
//         $('.menu-btn').hide();
//     })
// }

// function handleMenuItemClick(){
//     $('.topnav').on('click', 'li', function(event){
//         $('.topnav').hide();
//         $('.menu-btn').show();
//     })
// }

// $(function() {
//     if ($(window).width() <= 775) {
//       $('.topnav').hide();
//       handleMenuClick();
//       handleMenuItemClick();
//     } else {
//       $('.menu-btn').hide();
//     }
// });

//New plan! 
//Set up CSS so default view is mobile - just MENU button. Use media query to set up open layout for wide

// event listener and handler on the menu button - .toggleClass() or use jQuery to change CSS .css()
// every time the button is clicked - determine current state
// Then do the opposite 

// Create another function to change the color of the active link


// Here is Kevin's function for the navbar function - DOESN'T WORK!

// debugger;
// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });

function handleMenuClick(){
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', function () {
        // debugger;
        mainNav.classList.toggle('active');
    });
}

$(function() {
    handleMenuClick()
});