(function ($) {
  Drupal.behaviors.collapseBlock = {
    attach: function (context, settings) {
    	$('.panelizer-view-mode.node-embedded-to-profile h3').click(function() {
    		$('.panelizer-view-mode.node-embedded-to-profile').slideToggle();
		});
    }
  };
}(jQuery));