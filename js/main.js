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
	


    $('.case__slider.v1').each(function(){
    var $status = $('.slider-project__num');
    var $slickElement = $(this);
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;    
        $('.slider-project__num', slick.$slider.parent()).html(`<span class="current"> ${i} </span> <span> / ${slick.slideCount}</span> `);
    });
    $slickElement.slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      });
  });

    $('.case__slider.v2').each(function(){
    var $status = $('.slider-project__num');
    var $slickElement = $(this);
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;    
        $('.slider-project__num', slick.$slider.parent()).html(`<span class="current"> ${i} </span> <span> / ${slick.slideCount}</span> `);
    });
    $slickElement.slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      });
  });

    $('.case__slider.v3').each(function(){
    var $status = $('.slider-project__num');
    var $slickElement = $(this);
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;    
        $('.slider-project__num', slick.$slider.parent()).html(`<span class="current"> ${i} </span> <span> / ${slick.slideCount}</span> `);
    });
    $slickElement.slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      });
  });

    $('.case__slider.v4').each(function(){
    var $status = $('.slider-project__num');
    var $slickElement = $(this);
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;    
        $('.slider-project__num', slick.$slider.parent()).html(`<span class="current"> ${i} </span> <span> / ${slick.slideCount}</span> `);
    });
    $slickElement.slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      });
  });


function timeout(){
  $('.case__slider').slick('setPosition');
  $(window).resize();

}
$('.tabs__caption').click(function(){
  $('.case__slider').each(function(e){
    $(`.case__slider:eq(${e})`).slick('setPosition');
    timeout();
  });
});


})(jQuery);