//Movie Nodule

define(["director"], function(Director) {

var Movie = function(){
    this.set = function(attr,val) { 
      Object.defineProperty(this, attr, {value: val}); 
    }
    this.get = function(attr) { 
      return this[attr]; 
    }
    this.play = function(){
      console.log("Playing...");
    }
    this.stop = function(){
      console.log("stopped...");
    }
    this.displayActors = function(){
      if(this.hasOwnProperty('actors')){
        $.publish('displayActors', this);
      }else{
        console.log("404 -- Actors not Found");
      }
    }
  }

  return Movie;
});


//require({urlArgs: 'bust=' + (new Date()).getTime(),baseUrl: 'assets/js/app'},[‘example’]);