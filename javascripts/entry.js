// Requirejs configuration

requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../bower_components/jquery/dist/jquery.min",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../bower_components/require-handlebars-plugin/hbs"
  },
  shim: {
  	"bootstrap": ["jquery"]
  }
});


require(["bootstrap", "app"], 
function(b, app) {
}); 