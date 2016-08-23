(function ($) {
  Drupal.behaviors.accordionNavigation = {
    attach: function (context, settings) {
		$('.views-accordion a.active').parents('h3.ui-accordion-header').addClass('accordion-header-active');
    }
  };
}(jQuery));