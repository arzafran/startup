//Movie Observer

function MovieObserver() {
  $.subscribe('play', function(eventObject, MovieTitle){
    console.log("Playing " + MovieTitle + "...");
  });

  $.subscribe('stop', function(eventObject, MovieTitle){
    console.log(MovieTitle + " has stopped...");
  });

  $.subscribe('download', function(eventObject, MovieTitle){
  	console.log("Downloading " + MovieTitle + "... it's not piracy if there's no parrot involved");
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