$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://cdn.rawgit.com/mkunkel/trello-card-copy/master/style.css"
}).appendTo("head");
$.getScript('https://rawgit.com/mkunkel/trello-card-copy/master/script.min.js')


var $link = $('<a>').attr('href', 'javascript:$div.remove();').text('Close').attr('id', 'close-link');
var $div = $('<div>').html(getOutput).addClass('progress-report');
$('body').append($div);
var left = ($(window).width() - $div.outerWidth()) / 2 + 'px';
$div.css('left', left).append($link);
