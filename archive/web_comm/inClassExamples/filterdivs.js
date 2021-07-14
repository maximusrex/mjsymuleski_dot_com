/*filter divs*/
var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
      $('#parent').css('width:10000px');
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})