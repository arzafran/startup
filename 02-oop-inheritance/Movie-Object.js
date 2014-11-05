//Movie Object

/*
LEAVING THIS HERE FOR FURTHER EVALUATION
IT'S THE MOVIE AS AN OBJECT
*/

/*
I'VE CHOSEN JQUERY TO HANDLE THE PUBSUB EVENTS, 
IT SEEMS TO BE THE MOST SEMANTICAL APROACH ACCORDING TO
http://addyosmani.com/resources/essentialjsdesignpatterns
/book/#observerpatternjavascript
*/

function Movie() {
  this.set = function(attr,val){
    Object.defineProperty(this, attr, {value: val});
  }

  this.get = function(attr){
   return this[attr];
  }
  
  this.play = function(){
    $.publish('play', this.get('title'));
  }

  this.stop = function(){
    $.publish('stop', this.get('title'));
  }
}