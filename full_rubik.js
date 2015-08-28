(function ($) {
  Drupal.behaviors.hideTooltip = {
    attach: function (context, settings) {
    	$('.cke_toolbar a.cke_button').data('title',$this.attr('title')).removeAttr('title');
    }
  };
}(jQuery));