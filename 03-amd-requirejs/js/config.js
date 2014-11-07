requirejs.config({
    baseUrl: "js",
    paths: {
    	jquery: "libs/jquery",
    	movie: "Models/Movie",
    	director: "Models/Director"
    },
    shim: {
    	jquery : "$"
    }
});

requirejs(["main"]);