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
});

