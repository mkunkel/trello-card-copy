function getOutput() {
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
  return output.join('<br>');
}
