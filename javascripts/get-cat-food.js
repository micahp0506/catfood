// get-dog-food/loading cat JSON file

define(["jquery"], function($) {
  return {
    getMeCatFoodData: function(passFunc) {
      $.ajax({url: "data/cat.json"}).done(function(catObject) {
        passFunc(catObject);
      });
    }
  };
});