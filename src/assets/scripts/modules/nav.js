import $ from 'jquery'

$(document).ready(function(){
  $('.btn__nav').on('click', function(e){
    e.preventDefault();
    $('.nav').addClass('nav__activ');
  });

  $('.nav__closes').on('click', function(e){
    e.preventDefault();
    $('.nav').removeClass('nav__activ');
  });

  $('.nav__item').on('click', function(){
    $('.nav').removeClass('nav__activ');
  })

  $('.arrow-down_btn').on('click', function(){
    var target = $(this).data('target');
    var pos = $(target).offset().top;
    $('html, body').animate({'scrollTop': pos }, 1500);
    
  });

});



