$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://cdn.jsdelivr.net/gh/mkunkel/trello-card-copy@44c1a1f243387291d242af41092eeee01bd47de0/style.css"
}).appendTo("head");
$.getScript('https://cdn.rawgit.com/mkunkel/trello-card-copy/44c1a1f243387291d242af41092eeee01bd47de0/script.min.js', function() {
  var $link = $('<a>').attr('href', 'javascript:$(".progress-report").slideUp(600,function(){$(".progress-report").remove()});').text('Close').attr('id', 'close-link');
  $link.css('color', '#FFFFFF').css('position', 'absolute').css('bottom', '10px').css('right', '10px');
  $link.css('font-size', '14pt');
  var output = [];
  output.push('<br>');
  output.push('<p>*Notable work from last week*<br>' + getOutput('Done', 'Trello') + '</p>');
  output.push('<p>*Notable work planned this week*' + getOutput('To Do', 'Trello') + '<br>' + getOutput('Doing', 'Trello') + '</p>');
  output.push('<p>*Open questions*<br>' + getOutput('Questions', 'Discussion Here') + '</p>');

  var $div = $('<div>').html(output.join('<br>')).addClass('progress-report');
  var left = ($(window).width() - 1200) / 2 + 'px';
  $div.css('left', left).append($link);
  $('body').append($div);
  $div.hide().slideDown(600);
});
