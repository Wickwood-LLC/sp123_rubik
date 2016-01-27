(function ($) {
  Drupal.behaviors.collapseBlock = {
    attach: function (context, settings) {
    	$('.panelizer-view-mode.node-embedded-to-profile>h3').off("click");				// This is to prevent the yoyo effect wherein the block opens and closes immediately
    	$('.panelizer-view-mode.node-embedded-to-profile>h3').on("click", function() {
    		var $this = $(this);
    		$this.parents('.panelizer-view-mode.node-embedded-to-profile').find('.panel-display').first().slideToggle();
    		$this.toggleClass('open');
		});
    }
  };

  Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {
      var stickyTop = $('.pane-profile2-form-buttons').offset.top;
      var windowHeight = $(window).height();
      console.log('stickyTop is ' + stickyTop);
      console.log('windowHeight is ' + windowHeight);

      $(window).scroll(function(){ // scroll event 
        var windowTop = $(window).scrollTop(); // returns number  
        var currentPosition = windowTop + windowHeight - 144;
        console.log('Current position is ' + currentPosition);

        if (stickyTop > currentPosition) {
          $('.pane-profile2-form-buttons').css({ position: 'fixed', bottom: 0 });
        }
        else {
          $('.pane-profile2-form-buttons').css('position','static');
        }
      });

    }
  };
}(jQuery));