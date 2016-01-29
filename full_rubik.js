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
      // if (!!$('.pane-profile2-form-buttons').offset()) {  // make sure ".pane-profile2-form-buttons" element exists
        var stickyTop = $('.pane-profile2-form-buttons').offset().top;
        var windowHeight = $(window).height();

        console.log(stickyTop);
  
        $(window).scroll(function(){ // scroll event 
          var windowTop = $(window).scrollTop(); // returns number  
          var currentPosition = windowTop + windowHeight - 144;   // 144 is a discrepancy and I don't know where that comes from

          console.log('Current position is ' + currentPosition);
  
          if (stickyTop > currentPosition) {
            $('.pane-profile2-form-buttons').css({ position: 'fixed', bottom: 0 });
          }
          else {
            $('.pane-profile2-form-buttons').css('position','static');
          }
        });
      // }
    }
  };
}(jQuery));