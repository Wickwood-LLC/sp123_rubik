$(function() {
if ($('.views-accordion a.active').size()){
$('.views-accordion:first div.accordion-content').hide().parent().find('h3').removeClass('accordion-header-active');
$('.views-accordion a.active').parents('div.accordion-content').show().parents('div.views-accordion').find('h3').addClass('accordion-header-active');
}});