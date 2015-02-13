var columnName = 'Done';
var $list = $('.list .list-header-name:contains(' + columnName + ')').parent().parent();
var cards = $list.children('.list-cards').children('.list-card');
var prefix = 'https://trello.com';
var output = [];

for(var i = 0; i < cards.length; i++) {
  var link = $(cards[i]).find('.list-card-title').attr('href');
  var title = $(cards[i]).find('.list-card-title').text();
  var span = $(cards[i]).find('.list-card-title span').text();
  title = title.replace(span, '');
  if (title != 'Sol Integration progress report') {
    output.push('- ' + title + ' ([Trello|' + prefix + link + '])');
  }
}
// output.push('<a href="javascript:$div.remove();" style="float:right">Close</a>');
var $link = $('<a>').attr('href', 'javascript:$div.remove();').text('Close');
var $div = $('<div>').html(output.join('<br>')).addClass('progress-report');
$('body').append($div);
var left = ($(window).width() - $div.outerWidth()) / 2 + 'px';
$div.css('left', left).append($link);
