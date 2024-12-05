$(document).ready(function() {
    // Listen for scroll events
    $(window).scroll(function() {
        // Check the scroll position
        if ($(this).scrollTop() > 50) {  // If the page is scrolled more than 50px
            $('header').addClass('minimized'); // Add 'minimized' class to the header
        } else {
            $('header').removeClass('minimized'); // Remove 'minimized' class when scrolling back up
        }
    });
});
