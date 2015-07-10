(function ($) {
  Drupal.behaviors.responsiveMenu = {
    attach: function (context, settings) {
      $('#block-superfish-1 .block-content').before('<button id="mobile-menu"> ≡ Menu </button>');
      $('#block-superfish-1 #mobile-menu', context).click(function(){
        $('#block-superfish-1 #superfish-1').slideToggle("ease-in-out");
      });
    }
  };
}(jQuery));