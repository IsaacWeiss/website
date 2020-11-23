jQuery(function($) {

    // Fixed nav
    $.fn.checkHeaderPositioning = function(scrollEl, scrollClass) {

        if (!this.length) {
          return;
        }

        if($(scrollEl).scrollTop() > 50) {
            this.addClass(scrollClass);
        } else if($(scrollEl).scrollTop() === 0) {
            this.removeClass(scrollClass);
        }
    };

  // Interval loop
  $.fn.intervalLoop = function(condition, action, duration, limit) {
    var counter = 0;
    var looper = setInterval(function(){
      if (counter >= limit || $.fn.checkIfElementExists(condition)) {
        clearInterval(looper);
      } else {
        action();
        counter++;
      }
    }, duration);
  }

  // Check if element exists
  $.fn.checkIfElementExists = function(selector) {
    return $(selector).length;
  }

  var controller = {
    init: function(opts) {
      var base = this;

      $('body').checkHeaderPositioning(window, 'affix');

      // Add classes to elements
      base._addClasses();

      setTimeout(function(){
        base._attachEvents();
      }, 1000);
    },

    _addClasses: function() {
      var base = this;
    },

    _attachEvents: function() {
      var base = this;

        $('label.hamburger').on('click', function() {
            if (!$('body').hasClass('nav-open')) {
                $('body').addClass('nav-open');
            } else {
                $('body').removeClass('nav-open');
            }
        });

        // Fixed header
        $(window).on('scroll', function() {
          $('body').checkHeaderPositioning(window, 'affix');
        });

        // Subnav toggle
        $('li.has-submenu span.icon-caret').on('click', function() {
            var $me = $(this);

            if($me.siblings('.wsite-menu-wrap').hasClass('open')) {
                $me.siblings('.wsite-menu-wrap').removeClass('open');
            } else {
                $me.siblings('.wsite-menu-wrap').addClass('open');
            }
        });
    },
  }

  $(document).ready(function(){
    controller.init();
  });
});
