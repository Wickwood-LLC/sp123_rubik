!function($){Drupal.behaviors.accordionNavigation={attach:function(a,c){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}}}(jQuery);