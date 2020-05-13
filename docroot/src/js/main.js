/**
 * Custom JS code
 */

(function ($) {
  $('#hamburger-icon, .backdrop, #hamburger-close-icon')
    .on('click', function () {
      $('body').toggleClass('menu-open');
    });
})(jQuery);
