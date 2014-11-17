define(['jquery'], function ($) {
  $(document).ready(function(){
      function allowDrop(ev) {
        ev.preventDefault();
      }
      function drop(ev) {
        ev.preventDefault();
        var file = ev.dataTransfer.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(event) {
          $("#dropDaBase").val(event.target.result);
        };
      }
  });
});