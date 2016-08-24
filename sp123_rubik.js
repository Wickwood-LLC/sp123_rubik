(function ($) {
  Drupal.behaviors.accordionNavigation = {
    attach: function (context, settings) {
		$('.ui-accordion a.active').parents('.ui-accordion-content').addClass('ui-accordion-content-active').slideDown();
    }
  };
}(jQuery));