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
      if (!!$('div[id*="edit-actions"]').offset()) {  // make sure "div[id*="edit-actions"]" element exists

        var $this = $(this);

        $(window).on("load resize",function() {           // fire the script on load and resize

          var stickyTop = $this.offset().top;
          var windowHeight = $(window).height();
          var buttonWidth = $this.parent().width();
          var windowTop = $(window).scrollTop(); // returns number  
          var currentPosition = windowTop + windowHeight;

          $this.css('position','static');  // this is to reset the position of the element whenever the page is updated with AJAX.
          $this.width(buttonWidth);      // reset button width

          if (stickyTop > currentPosition) {
            $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: $(this).parent().width() });
          }
          else if ((stickyTop - windowTop) < 0) {
            $this.css({ position: 'fixed', top: 0, bottom: 'initial', width: $(this).parent().width() });
          }
          else {
            $this.css('position','static');
          }
    
          $(window).scroll(function(){ // scroll event 
            var windowTop = $(window).scrollTop(); // returns number  
            var currentPosition = windowTop + windowHeight;
    
            if (stickyTop > currentPosition) {
              $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth });
            }
            else if ((stickyTop - windowTop) < 0) {
              $this.css({ position: 'fixed', top: 0, bottom: 'initial', width: buttonWidth });
            }
            else {
              $this.css('position','static');
            }
          });
        });
      }
    }
  };
}(jQuery));