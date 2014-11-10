$(document).ready(function(){
  var handle = $("#handlebars").html();
  var compiledHandle = Handlebars.compile(handle);

  var under = $("#underscore").html();
  var compiledUnder = _.template(under);

  var dustUncompiled = $("#dust").html();
  var compiledDust = dust.compile(dustUncompiled, "i");
  dust.loadSource(compiledDust);

  $.getJSON('app/data.json',function(values){
    $('#handleDiv').html(compiledHandle(values));
    $('#underDiv').html(compiledUnder(values));
    dust.render("i",values,function(err, o) {
      $('#dustDiv').html(o);
    });
  });
});