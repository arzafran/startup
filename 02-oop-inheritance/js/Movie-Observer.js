//Movie Observer

function MovieObserver() {
  $.subscribe('play', function(eventObject, MovieTitle){
    console.log("Playing " + MovieTitle + "...");
    $('#greeter-text').html("Playing " + MovieTitle + "...");
  });

  $.subscribe('stop', function(eventObject, MovieTitle){
    console.log(MovieTitle + " has stopped...");
    $('#greeter-text').html(MovieTitle + " has stopped...");
  });

  $.subscribe('download', function(eventObject, MovieTitle){
  	console.log("Downloading " + MovieTitle + "... it's not piracy if there's not a parrot involved");
    $('#greeter-text').html("Downloading " + MovieTitle + "... it's not piracy if there's not a parrot involved");
  });

  $.subscribe('displayActors', function(eventObject, movie){
    $.each(movie.actors, function(){
      console.log(this.getname());
      var actorsBox = '<div class="row clearfix">' +
        '<p class="actorName">' + this.getname() + '</p>' + 
        '</div>';
      $('#ironMan').append(actorsBox);
    });
  });

}

/*
ALTERNATE MOVIEOBSERVER

function MovieObserver() {
  this.updatestatus = function(event,movieTitle) {
  	if (event == "play") {
      console.log("Playing: "+movieTitle+"...");
    }
    else if (event == "stop") {
      console.log(movieTitle+" has stopped...");
    }
    else if (event == "download") {
  	console.log("Downloading " + movieTitle + "... it's not piracy if there's no parrot involved");
    }
    $.subscribe('cinema', this.updatestatus);
};
*/