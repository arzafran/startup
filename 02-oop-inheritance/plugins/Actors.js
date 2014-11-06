// Actors Class

function Actor (name){
  var name = name;
  this.getname = function(){
   return name;
  }
};

function addActor(array, name){
	var newActor = new Actor(name);
	array.push(newActor);
};