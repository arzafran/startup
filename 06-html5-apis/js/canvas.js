define(['jquery'], function ($) {
  $(document).ready(function(){
  //Canvas random Figures
    var figure1 = document.getElementById('figure1');
    var figure2 = document.getElementById('figure2');
    var figure3 = document.getElementById('figure3');


    var fig1 = figure1.getContext('2d');
    fig1.fillStyle = '#02200';
    fig1.fillRect(0,0,100,75);

    var fig2 = figure2.getContext("2d");
    fig2.strokeStyle = '#944444';
    fig2.beginPath();
    fig2.arc(95,50,40,0,2*Math.PI);
    fig2.stroke();

    var fig3 = figure3.getContext("2d");
    fig3.strokeStyle = '#55A2D2';
    fig3.moveTo(200,0);
    fig3.lineTo(0,100);
    fig3.stroke();
  // END RANDOM FIGURES

  // CANVAS ANIMATIONS
  var canvasAnimation = document.getElementById('canvasAnimation');

  if (canvasAnimation.getContext) {
      var context = canvasAnimation.getContext('2d');
      
      var requestAnimationFrame =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              function(callback) {
                  return setTimeout(callback, 16);
              };
      var dontBeA = {  //don't be a SQUARE! :) (pun intended)
          'x': 50,
          'y': 50,
          'width': 100,
          'height': 100,
          'fill': '#000000'
      };    
      var render = function() {
          context.clearRect(0, 0, canvasAnimation.width, canvasAnimation.height);
          context.beginPath();
          context.rect(dontBeA.x, dontBeA.y, dontBeA.width, dontBeA.height);
          context.fillStyle = dontBeA.fill;
          context.fill();
          requestAnimationFrame(render);
      };

      render();
      
      var animate = function(prop, val, duration) {
        var start = new Date().getTime();
        var end = start + duration;
        var current = dontBeA[prop];
        var distance = val - current;
          
        var step = function() {
          var timestamp = new Date().getTime();
          var progress = Math.min((duration - (end - timestamp)) / duration, 1);
          dontBeA[prop] = current + (distance * progress);
          if (progress < 1) requestAnimationFrame(step);
        };
        return step();
      };

      animate('x', 0, 1000);

      setTimeout(function() {
          animate('y', 0, 1000);
          
          setTimeout(function() {
              animate('x', 50, 1000);
              animate('y', 50, 1000);
          }, 1000);
      }, 1000);

      //some code i've found to animate Canvas through keys!
      var meta = function(e) {
          var distance = 100;
          var prop = 'x';
          var mult = 1;
      
          if (e.which < 37 || e.which > 40) {
              return false;
          };
      
          if (e.which === 37 || e.which === 38) {
              mult = -1;
          }
      
          if (e.which === 38 || e.which === 40) {
              prop = 'y';
          };
      
          return [prop, mult * distance];
      };
      
      document.body.addEventListener('keydown', function(e) {
          var info = meta(e);
          if (info) {
              e.preventDefault();
              animate(info[0], dontBeA[info[0]] + info[1], 1000);
          };
      });

      document.body.addEventListener('keyup', function(e) {
          var info = meta(e);
         
          if (info) {
              e.preventDefault();
              animate(info[0], dontBeA[info[0]], 1000);
          };
      });
  };

  });
});