(function ($) {
  Drupal.behaviors.hideTooltip = {
    attach: function (context, settings) {
    	$('.cke_toolbar a.cke_button').removeAttr('title');
    }
  };
}(jQuery));