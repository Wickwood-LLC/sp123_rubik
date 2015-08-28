(function ($) {
  Drupal.behaviors.hideTooltip = {
    attach: function (context, settings) {
    	$('.cke_toolbar a.cke_button').each( function() {
		    var $this = $(this);
		    $this.data('title',$this.attr('title'));
		    $this.removeAttr('title');
		});
    }
  };
}(jQuery));