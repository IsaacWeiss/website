"use strict";

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

      $("body").checkHeaderPositioning(window, "sticky-header");

      setTimeout(function () {
        base._attachEvents();
      }, 1000);
    },

    _attachEvents: function () {

      // mobile nav toggle
      $("label.hamburger").click(function () {
        $("nav").slideToggle("fast");

        // change hamburger to X
        if (!$("body").hasClass("nav-open")) {
          $("body").addClass("nav-open");
        } else {
          $("body").removeClass("nav-open");
        }
      });

      // mobile subnav toggle
      if ($(window).width() < 992) {
        $("li.has-submenu").click(function() {
          $(this).find(".submenu").slideToggle("fast");
        });
      }

      // keep sticky header
      $(window).scroll(function () {
        $("body").checkHeaderPositioning(window, "sticky-header");
      });
    }
  }

  $(document).ready(function () {
    controller.init();
  });

  // clean up tags on resize so style sheet media query can take over
  $(window).resize(function () {
    $("nav").css("display", "");
    $(".submenu").css("display", "");
    $("body").removeClass("nav-open");
  });
});
