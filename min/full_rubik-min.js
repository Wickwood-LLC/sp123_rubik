!function($){Drupal.behaviors.responsiveMenu={attach:function(e,o){$("#block-superfish-1 .block-content").before('<button id="mobile-menu"> ≡ Menu </button>'),$("#block-superfish-1 #mobile-menu",e).click(function(){$("#block-superfish-1 #superfish-1").slideToggle("ease-in-out")})}}}(jQuery);