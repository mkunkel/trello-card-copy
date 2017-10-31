$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://rawgit.com/mkunkel/trello-card-copy/master/style.css"
}).appendTo("head");
$.getScript('https://rawgit.com/mkunkel/trello-card-copy/master/script.js', function() {
  var $link = $('<a>').attr('href', 'javascript:$(".progress-report").slideUp(600,function(){$(".progress-report").remove()});').text('Close').attr('id', 'close-link');
  $link.css('color', '#FFFFFF').css('position', 'absolute').css('bottom', '10px').css('right', '10px');
  $link.css('font-size', '14pt');
  var output = [];
  output.push('<br>');
  $('.list-wrapper').each(function(index, value) {
    output.push('<p><b>' + $(this).find('h2').text() + '</b> <br>titles:<br>');
    $(this).find('.list-card-title').each(function(i, val) {
      output.push($(this).text().replace(/^#[0-9]*/, ''));
    });

    output.push('<p><b>' + $(this).find('h2').text() + '</b> <br>links:<br>');
    $(this).find('.list-card').each(function(i, val) {
      output.push('https://trello.com' + $(this).attr('href'));
    });
  });

  var $div = $('<div>').html(output.join('<br>')).addClass('progress-report');
  var left = ($(window).width() - 1200) / 2 + 'px';
  $div.css('left', left).append($link);
  $('body').append($div);
  $div.hide().slideDown(600);
});
