var TwitterHelper = {
  htmlize: function(tweet) {
    // replace url w/ links
    tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, '<a href="$&" target="_blank">$&</a>');
    // replace hashtags w/ links
    tweet = tweet.replace(/#(\w+)/g, '<a href="http://search.twitter.com/search?q=%23$1" target="_blank">#$1</a>');
    // replace @username w/ links
    tweet = tweet.replace(/@(\w+)/g, '<a href="http://twitter.com/$1" target="_blank">@$1</a>');
    // return HTMLized tweet
    return tweet;
  },
  timediff: function(timestamp, created_at) {
    // Time constants
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
 
    // Timediff
    timediff = timestamp - created_at;
 
    // Create timestring
    if (timediff < second * 7)
      return 'right now';
    if (timediff < minute)
      return Math.floor(timediff / second) + ' seconds ago';
    if (timediff < minute * 2)
      return 'about a minute ago';
    if (timediff < hour)
      return Math.floor(timediff / minute) + ' minutes ago';
    if (timediff < hour * 2)
      return 'about an hour ago';
    if (timediff < day)
      return Math.floor(timediff / hour) + ' hours ago';
    if (timediff > day && timediff < day * 2)
      return 'yesterday';
    if (timediff < week * 52)
      return Math.floor(timediff / day) + ' days ago';
    else
      return 'over a year ago';
  }
};