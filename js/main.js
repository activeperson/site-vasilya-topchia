(function($) {
$(function() {
 
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
 
});



 $('.reviews__mini-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.right__big-slider'
});
$('.right__big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.reviews__mini-slider',
  dots: true,
 infinite: false,
  centerMode: false,
  focusOnSelect: true
});
	



})(jQuery);