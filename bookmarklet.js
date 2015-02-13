$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://rawgit.com/mkunkel/trello-card-copy/master/style.css"
}).appendTo("head");
$.getScript('https://rawgit.com/mkunkel/trello-card-copy/master/script.min.js', function() {
  var $link = $('<a>').attr('href', 'javascript:$(".progress-report").slideUp(600,function(){$(".progress-report").remove()});').text('Close').attr('id', 'close-link');
  $link.css('color', '#FFFFFF').css('position', 'absolute').css('bottom', '10px').css('right', '10px');
  $link.css('font-size', '14pt');
  var output = [];
  output.push('<p>Notable work from last week</p>')
  output.push(getOutput('Done', 'Trello'));
  output.push('<p>Notable work planned this week</p>')
  output.push(getOutput('To Do', 'Trello'));
  output.push(getOutput('Doing', 'Trello'));
  output.push('<p>Open questions</p>')
  output.push(getOutput('Questions', 'Discussion Here'));

  var $div = $('<div>').html(output.join('<br>')).addClass('progress-report');
  var left = ($(window).width() - 1200) / 2 + 'px';
  $div.css('left', left).append($link);
  $('body').append($div);
  $div.hide().slideDown(600);
});
