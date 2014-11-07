// Director Class
define(function() {
var Director = function(val){

    var name = val,
  	    quotes=[];

    this.get = function(attr) { 
      return this[attr]; 
    }

    this.speak = function(){
      console.log(name + " says:");
      $.each(quotes,function(i,val){ 
        console.log("'"+val+"'");
      });
    }
    
    this.getQuotes = function(){
      return quotes;
    }

    this.addQuote = function(newQuote){
    	quotes.push(newQuote);
    }
  }
return Director;
});
