// get-dog-food/loading dog JSON file

define(["jquery"], function($) {
  return {
    getMeDogFoodData: function(passFunc) {
      $.ajax({url: "data/dog.json"}).done(function(dogObject) {
      	console.log(dogObject);
        passFunc(dogObject);
      });
    }
  };
});