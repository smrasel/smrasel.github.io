
// IIFE - Immediately Invoked Function Expression
(function($, window, document) {

  
  // The $ is now locally scoped

  // Listen for the jQuery ready event on the document
  $(function() {

    // The DOM is ready!
    console.log( "I am mother fucker designer but yet know javascript!" );

    $('.toggle-nav').click(function() {
      toggleNav();
    });

    function toggleNav() {
      if ($('#site-wrapper').hasClass('show-nav')) {
        // Need to Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
      } else {
        // Need to Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
      }
    }

    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        if ($('#site-wrapper').hasClass('show-nav')) {
          toggleNav();
        }
      }
    });

  });

  // The rest of the code goes here!

  
  
    

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter