//TESTINGGGGG

var ironManActors = [];
addActor(ironManActors,'Robert Downing Jr');
addActor(ironManActors,'Gwyneth Paltrow');
addActor(ironManActors,'Ben Kingsley');

var ironMan = new Movie();
ironMan.set('title','Iron Man 3');
ironMan.set('actors', ironManActors);

var pirata = new DownloadableMovie();
pirata.set('title', 'Piratas del Caribe VII: Todos contra Rocky');

var bernardo = new Movie;
Social.call(Movie.prototype);
bernardo.set('title','Bernardo y Bianca en Cangurolandia!');

var audience = new MovieObserver();

$(document).ready(function(){
var $greeter = $('#greeter-text');
  $('#play').click(function(){
    ironMan.play();
  });
  
  $('#stop').click(function(){
  	ironMan.stop();
  });

  $('#share').click(function(){
  	bernardo.share($('#user-input').val().trim()||'the World!');
  });
  
  $('#download').click(function(){
  	pirata.download();
  });

  $('#displayActors').click(function(){
  	ironMan.displayActors();
  });
});
