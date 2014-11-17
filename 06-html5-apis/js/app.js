requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery : "vendor/jquery" ,
        canvas : "canvas",
        indexDB: "indexdb",
        dragndrop : "dragndrop",
        websocket: "websocket"
    },
    shim: {
      jquery: {
        exports: "$"
      }
    }
});

requirejs(['jquery', 'canvas', 'indexdb','websocket','dragndrop']);