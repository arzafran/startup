define(['jquery'], function ($) {
	  if ("WebSocket" in window){
	     var ws = new WebSocket("ws://echo.websocket.org");
	  }
	  else{
	  	console.log("not supported");
	  }
});