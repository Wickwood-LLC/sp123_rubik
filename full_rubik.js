(function ($) {
  Drupal.behaviors.collapseBlock = {
    attach: function (context, settings) {
    	$('.panelizer-view-mode.node-embedded-to-profile').find('h3').click(function() {
    		$(this).find('.panel-display').slideToggle();
		});
    }
  };
}(jQuery));