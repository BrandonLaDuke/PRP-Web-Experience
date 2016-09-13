var main = function() {
  $('.btn').click(function() {
    $('.btn').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });


}

$(document).ready(main);