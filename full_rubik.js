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

      $( window ).on("load resize", function() {

        var $this = $('div[id*="edit-actions"]');

        var stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
        var windowHeight = $(window).height();    // measures the window height
        var buttonWidth = $this.parent().width(); // gets the width of our button
        var buttonHeight = $this.parent().height();        // gets the height of our button
        var windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
        var currentPosition = windowTop + windowHeight;    // tells how far our target element is from where our screen is currently 

        $this.css('position','static');  // this is to reset the position of the element whenever the page is updated with AJAX.
        $this.width(buttonWidth);      // reset button width

        if (stickyTop > currentPosition) {    // if target element goes above the screen
          $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: $(this).parent().width() });   // stick it to the top
        }
        else if ((stickyTop - windowTop + buttonHeight) < 0) {   // if target element goes below the screen
          $this.css({ position: 'fixed', top: '65px', bottom: 'initial', width: $(this).parent().width() });   //stick it at the bottom
        }
        else {
          $this.css('position','static');
        }
  
        $(window).scroll(function(){ // scroll event 
          var windowTop = $(window).scrollTop(); // tells how far our screen is currently from the top of the page
          var currentPosition = windowTop + windowHeight;    // tells how far our target element is from where our screen is currently 
  
          if (stickyTop > currentPosition) {    // if target element goes above the screen
            $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth });    // stick it to the top
          }
          else if ((stickyTop - windowTop + buttonHeight) < 0) {   // if target element goes below the screen
            $this.css({ position: 'fixed', top: '65px', bottom: 'initial', width: buttonWidth });   //stick it at the bottom
          }
          else {
            $this.css('position','static');
          }
        });
      });          
    }
  };
}(jQuery));