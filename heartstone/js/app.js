
// IIFE - Immediately Invoked Function Expression
(function($, window, document) {

  
  // The $ is now locally scoped

  // Listen for the jQuery ready event on the document
  $(function() {

    $('.register').on('click', function(e) {
      e.preventDefault();
      Avgrund.hide();
    });
    $('.login').on('click', function(e) {
      Avgrund.show("#default-popup");
    });

    // The DOM is ready!
    console.log( "I am mother fucker designer but yet know javascript!" );


    $('.toggle-nav').click(function() {
      // set the scroll position very top
      // todo need to set previous state for scroll position for better ux
      $(window).scrollTop(0);

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

  var special = ['reveal', 'top', 'boring', 'perspective', 'extra-pop'];

  // Toggle Nav on Click
  $('.no-fund a').click(function() {

    var transitionClass = $(this).data('transition');

    if ($.inArray(transitionClass, special) > -1) {
      $('body').removeClass();
      $('body').addClass(transitionClass);
    } else {
      $('body').removeClass();
      $('#site-canvas').removeClass();
      $('#site-canvas').addClass(transitionClass);
    }

    $('#site-wrapper').toggleClass('show-nav');

    return false;

  });

  // The rest of the code goes here!

  
  
    

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter