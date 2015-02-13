$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://rawgit.com/mkunkel/trello-card-copy/master/style.css"
}).appendTo("head");
$.getScript('https://rawgit.com/mkunkel/trello-card-copy/master/script.min.js', function() {
  var $link = $('<a>').attr('href', 'javascript:$div.remove();').text('Close').attr('id', 'close-link');
  $link.css('float', 'right').css('color', '#FFFFFF');
  var $div = $('<div>').html(getOutput).addClass('progress-report');
  var left = ($(window).width() - 1200) / 2 + 'px';
  $div.css('left', left).append($link);
  $('body').append($div);
  $div.hide().fadeIn();
});
