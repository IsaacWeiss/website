jQuery(function ($) {

  // sticky header helper function
  $.fn.checkHeaderPositioning = function (scrollEl, scrollClass) {

    if (!this.length) {
      return;
    }

    if ($(scrollEl).scrollTop() > 50) {
      this.addClass(scrollClass);
    } else if ($(scrollEl).scrollTop() === 0) {
      this.removeClass(scrollClass);
    }
  };

  var controller = {
    init: function () {
      var base = this;

      $('body').checkHeaderPositioning(window, 'affix');

      setTimeout(function () {
        base._attachEvents();
      }, 1000);
    },

    _attachEvents: function () {

      // mobile nav toggle
      $('label.hamburger').on('click', function () {
        $("nav").slideToggle("fast");
        if (!$('body').hasClass('nav-open')) {
          $('body').addClass('nav-open');
        } else {
          $('body').removeClass('nav-open');
        }
      });

      // mobile subnav toggle
      $('li.has-submenu').on('click', function () {
        $(".submenu").slideToggle("fast");
      });

      // keep sticky header
      $(window).on('scroll', function () {
        $('body').checkHeaderPositioning(window, 'affix');
      });

    }
  }

  $(document).ready(function () {
    controller.init();
  });
});