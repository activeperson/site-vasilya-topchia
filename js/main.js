(function($) {
$(function() {
 
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
 
});
$('.modal .form-button').on('click', function(e){
  e.preventDefault();
});
$('.close').on('click', function(e){
  e.stopPropagation();
  $('.modal-wrap').toggleClass('active');
});

$('.default-button.www').on('click', function(e){
  e.stopPropagation();
$('.modal-wrap').toggleClass('active');
});
$('body').on('keydown', function(e){
  if($('.modal-wrap').hasClass('active')){
    if(e.keyCode == 27){
    $('.modal-wrap').toggleClass('active');
  }
  }
  
})

$('.right__big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.reviews__mini-slider',
  dots: true,
 infinite: false,
  centerMode: false,
  focusOnSelect: true,
  cssEase: 'linear',
  fade: true
});
	
 $('.reviews__mini-slider').each(function(){
    var $status = $('.num');
    var $slickElement = $(this);
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;    
        $('.num', slick.$slider.parent()).html(`<span class="current"> ${i} </span> <span> / ${slick.slideCount}</span> `);
    });
    $slickElement.slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  asNavFor: '.right__big-slider',
  focusOnSelect: true,
  prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    cssEase: 'linear',
});
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