(function ($) {
  Drupal.behaviors.accordionNavigation = {
    attach: function (context, settings) {
		$('.ui-accordion a.active').parents('.ui-accordion-content').prev('h3.ui-accordion-header').addClass('accordion-header-active');
    }
  };
}(jQuery));