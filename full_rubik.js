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
      if (!!$('[id*="edit-actions"]').offset()) {  // make sure "[id*="edit-actions"]" element exists

        $(window).on("load resize",function() {           // fire the script on load and resize
          $('[id*="edit-actions"]').css('position','static');  // this is to reset the position of the element whenever the page is updated with AJAX.
          $('[id*="edit-actions"]').width( $(this).parent().width() );      // reset button width

          var stickyTop = $('[id*="edit-actions"]').offset().top;
          var windowHeight = $(window).height();
          var buttonWidth = $('[id*="edit-actions"]').width();
          var windowTop = $(window).scrollTop(); // returns number  
          var currentPosition = windowTop + windowHeight;

          if (stickyTop > currentPosition) {
            $('[id*="edit-actions"]').css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth });
          }
          else if ((stickyTop - windowTop) < 0) {
            $('[id*="edit-actions"]').css({ position: 'fixed', top: 0, bottom: 'initial', width: buttonWidth });
          }
          else {
            $('[id*="edit-actions"]').css('position','static');
          }
    
          $(window).scroll(function(){ // scroll event 
            var windowTop = $(window).scrollTop(); // returns number  
            var currentPosition = windowTop + windowHeight;
    
            if (stickyTop > currentPosition) {
              $('[id*="edit-actions"]').css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth });
            }
            else if ((stickyTop - windowTop) < 0) {
              $('[id*="edit-actions"]').css({ position: 'fixed', top: 0, bottom: 'initial', width: buttonWidth });
            }
            else {
              $('[id*="edit-actions"]').css('position','static');
            }
          });
        });
      }
    }
  };
}(jQuery));