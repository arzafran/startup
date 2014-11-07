require(["jquery","movie","director"], function($,Movie,Director) {
  var peli = new Movie();
  var director = new Director('Marc Webb');
  director.addQuote("An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.");
  director.addQuote("The Smiths is a very specific kind of music that signifies something about the people who listen to it.");
  director.addQuote("I wanted the audience to be in Tom's shoes, right? That was my primary objective, and I wanted people to be in love with her.");

	peli.set('title','500 days of summer');
	peli.set('director',director);
	console.log(peli.get('director').speak());

  $(document).ready(function(){
  	$('#show-button').click(function(){
      $.each(director.getQuotes(),function(){
          $('#display').append('<div class="row clearfix quote">'+"'"+this+"'"+'</div>');
      });
  	});
  });
});