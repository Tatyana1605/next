

import $ from 'jquery'
$(document).on('submit', '.form', function(e) {
  e.preventDefault(); 
  var data = $(this).serializeArray();
  $.ajax({
    url: 'https://webdev-api.loftschool.com/register', 
    type: 'POST', 
    dataType: 'JSON', 
    data: data 
  }).done(function(res) {
    alert('Данные успешно переданы!');
    console.log(res);
    $('.form').trigger('reset'); 
  }).fail(function(err) {
    alert('Ошибка передачи запроса.');
    console.log(err);
  });
});