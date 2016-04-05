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

      // if ($('div[id*="edit-actions"]').length) {        // if element exists

        var stickyTop;
        var windowHeight;
        var buttonWidth;
        var buttonHeight;
        var windowTop;
        var currentPosition;
        var $this;

        function reset() {
          $('div[id*="edit-actions"]').each(function (e) {
            $this = $(this);
            
            stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
            windowHeight = $(window).height();    // measures the window height
            buttonWidth = $this.width(); // gets the width of our button
            buttonHeight = $this.height();        // gets the height of our button

            $this.width( buttonWidth );
            $this.height( buttonHeight );
            $this.css('position','static');
          });
        }
        $(window).load(reset);
        $(window).resize(reset);

        $(window).on("load resize scroll", function() {
          $('html').find('div[id*="edit-actions"]').each(function() {
            windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
            currentPosition = windowTop + windowHeight;    // tells how far our target element is from where our screen is currently 

            console.log(stickyTop);
            console.log(currentPosition - buttonHeight);
            console.log(stickyTop - (currentPosition - (buttonHeight)));

            if (stickyTop > (currentPosition - (buttonHeight))) {    // if target element goes below the screen
              $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth, box-sizing: content-box });   // stick it to the bottom
            }
            else if ((stickyTop - windowTop) < 0) {   // if target element goes above the screen
              $this.css({ position: 'fixed', top: '65px', bottom: 'initial', width: buttonWidth, box-sizing: content-box });   //stick it at the top
            }
            else {
              $this.css({ position: 'static', width: buttonWidth, box-sizing: content-box });
            }
          }); 
        });

        // $(window).scroll(function() { // scroll event 
        //   console.log(stickyTop);
        //   console.log(currentPosition - buttonHeight);
        //   console.log(stickyTop - (currentPosition - (buttonHeight)));

        //   if (stickyTop > (currentPosition - (buttonHeight))) {    // if target element goes below the screen
        //     $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: $(this).parent().width() });   // stick it to the bottom
        //   }
        //   else if ((stickyTop - windowTop) < 0) {   // if target element goes above the screen
        //     $this.css({ position: 'fixed', top: '65px', bottom: 'initial', width: $(this).parent().width() });   //stick it at the top
        //   }
        //   else {
        //     $this.css({ position: 'static', width: buttonWidth });
        //   }
        // });
      // }    
    }
  };
}(jQuery));