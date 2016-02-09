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
      if (!!$('.pane-profile2-form-buttons').offset()) {  // make sure ".pane-profile2-form-buttons" element exists

        $(window).on("load resize",function() {           // fire the script on load and resize
          $('.pane-profile2-form-buttons').css('position','static');  // this is to reset the position of the element whenever the page is updated with AJAX.

          var stickyTop = $('.pane-profile2-form-buttons').offset().top;
          var windowHeight = $(window).height();
          var buttonWidth = $('.pane-profile2-form-buttons').width();
          var windowTop = $(window).scrollTop(); // returns number  
          var currentPosition = windowTop + windowHeight;

          if (stickyTop > currentPosition) {
            $('.pane-profile2-form-buttons').css({ position: 'fixed', bottom: 0, width: buttonWidth });
          }
          else {
            $('.pane-profile2-form-buttons').css('position','static');
          }
    
          $(window).scroll(function(){ // scroll event 
            var windowTop = $(window).scrollTop(); // returns number  
            var currentPosition = windowTop + windowHeight;
    
            if (stickyTop > currentPosition) {
              $('.pane-profile2-form-buttons').css({ position: 'fixed', bottom: 0, width: buttonWidth });
            }
            else {
              $('.pane-profile2-form-buttons').css('position','static');
            }
          });
        });
      }
    }
  };
}(jQuery));