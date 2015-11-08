define(["jquery", "hbs", "hbs!../templates/cat", "hbs!../templates/dog", "get-cat-food", "get-dog-food", "dog", "cat"], 
function($, Handlebars, cattemp, dogtemp, getCatFood, getDogFood, dog, cat) {
console.log("yep");
// Fucntion request to send to DOM
getDogFood.getMeDogFoodData(dog.dogIWantToAdd);
getCatFood.getMeCatFoodData(cat.catIWantToAdd);
});


