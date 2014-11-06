//TESTINGGGGG

var ironManActors = [];
addActor(ironManActors,'Robert Downing Jr');
addActor(ironManActors,'Gwyneth Paltrow');
addActor(ironManActors,'Ben Kingsley');

var ironMan = new Movie();
ironMan.set('title','Iron Man 3');
Social.call(Movie.prototype); // ADDED SOCIAL MIXIN HERE, INSTEAD OF ADDING IT IN THE MOVIE MODULE ITSELF, SO THE MOVIE MODULE IS A STANDALONE MODULE.
ironMan.set('actors', ironManActors);

var pirata = new DownloadableMovie();
pirata.set('title', 'Piratas del Caribe VII: Todos contra Rocky');

var bernardo = new Movie;
bernardo.set('title','Bernardo y Bianca en Cangurolandia!');

var Fran = new MovieObserver();

