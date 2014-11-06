// Movie Module

/*
I'VE CHOSEN JQUERY TO HANDLE THE PUBSUB EVENTS, 
IT SEEMS TO BE THE MOST SEMANTICAL APROACH ACCORDING TO
http://addyosmani.com/resources/essentialjsdesignpatterns
/book/#observerpatternjavascript
*/

var Movie = (function ($){

  var publicAPI = function () {
    this.set = function(attr,val) { 
      Object.defineProperty(this, attr, {value: val}); 
    }
    this.get = function(attr) { 
      return this[attr]; 
    }
    this.play = function(){
      $.publish('play', this.get('title'));
    }
    this.stop = function(){
      $.publish('stop', this.get('title'));
    }
    this.displayActors = function(){
      if(this.hasOwnProperty('actors')){
        $.each(this.actors, function(){
         console.log(this.getname());
        });
      }else{
        console.log("404 -- Actors not Found");
      }
    }
  }

  return publicAPI;
}(jQuery));

/*
ALTERNATE MOVIE MODULE FOR THE ALTERNATE MOVIE OBSERVER XD
BOTH SHOULD WORK, JUST DON'T KNOW WHICH AND WHY WOULD BE BETTER

var Movie = (function ($){
  var publicAPI = function () {    
    this.set = function(attr,val) { 
      Object.defineProperty(this, attr, {value: val}); 
    }
    this.get = function(attr) { 
      return this[attr]; 
    }
    this.play = function(){
      $.publish('cinema', ['play', this.get('title')]);
    }
    this.stop = function(){
      $.publish('cinema', ['stop', this.get('title')]);
    }
  }
  return publicAPI;   
}(jQuery));
*/

