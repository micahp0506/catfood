define(["jquery", "hbs", "hbs!../templates/cat", "hbs!../templates/dog", "get-cat-food", "get-dog-food", "dog", "cat"], 
function($, Handlebars, cattemp, dogtemp, getCatFood, getDogFood, dog, cat) {
console.log("yep");
// Fucntion request to send to DOM
getDogFood.getMeDogFoodData(dog.dogIWantToAdd);
getCatFood.getMeCatFoodData(cat.catIWantToAdd);
});


// $(document).ready(function() { 

// var newDogArray = [];
// var newDogTypeArray = [];
// var newDogVolumeArray = [];

// // Dogfood	
// function dogIWantToAdd(dog) {
// 	for (var i = 0; i < dog.dog_brands.length; i++) {
// 		console.log("dog2", dog.dog_brands[i]);
// 		newDogArray[i] = "<h1>" + dog.dog_brands[i].brand + "</h1>";
// 		$("#output").append(newDogArray[i]);
// 		dogTypesToAdd(dog.dog_brands[i]);	
		
// 	}	
// }

// function dogTypesToAdd(dog) {
// 	for (var j = 0; j < dog.types.length; j++) {
// 		console.log("dog3", dog.types[j]);
// 		newDogTypeArray[j] = "<p>" + dog.types[j].type + "</p>";
// 		$("#output").append(newDogTypeArray[j]);
// 		dogVolumesToAdd(dog.types[j]);
// 	}
// }

// function dogVolumesToAdd(dog) {
// 	for (var z = 0; z < dog.volumes.length; z++) {
// 		console.log("dog4", dog.volumes[z]);
// 		newDogVolumeArray[z] = "<em>" + dog.volumes[z].volume + "  $" + dog.volumes[z].price + "</br>" + "</em>";
// 		$("#output").append(newDogVolumeArray[z]);
// 	}

// }



// $.ajax({
// 		url: "data/dog.json"
// 	}).done(function(dogObject) {
// 		console.log("Dog1", dogObject);
// 		dogIWantToAdd(dogObject);
		
// });

// var newCatArray = [];
// var newCatBreedsArray = [];
// var newCatTypeArray = [];
// var newCatVolumeArray = [];

// // Catfood
// function catIWantToAdd(cat) {
// 	for (var i = 0; i < cat.cat_brands.length; i++) {
// 		console.log("cat2", cat.cat_brands[i]);
// 		newCatArray[i] = "<h1>" + cat.cat_brands[i].brand + "</h1>";
// 		$("#cat").append(newCatArray[i]);
// 		catBreedsToAdd(cat.cat_brands[i]);	
		
// 	}	
// }

// function catBreedsToAdd(cat) {
// 	for (var j = 0; j < cat.breeds.length; j++) {
// 		console.log("cat3", cat.breeds[j]);
// 		newCatBreedsArray[j] = "<p>" + cat.breeds[j].breed + "</p>";
// 		$("#cat").append(newCatBreedsArray[j]);
// 		catTypeToAdd(cat.breeds[j]);
// 	}
// }

// function catTypeToAdd(cat) {
// 	for (var z = 0; z < cat.types.length; z++) {
// 		console.log("cat4", cat.types[z]);
// 		newCatTypeArray[z] = "<p>" + cat.types[z].type + "</p>";
// 		$("#cat").append(newCatTypeArray[z]);
// 		catVolumeToAdd(cat.types[z]);
// 	}

// }

// function catVolumeToAdd(cat) {
// 	for (var h = 0; h < cat.volumes.length; h++) {
// 		console.log("cat5", cat.volumes[h]);
// 		newCatVolumeArray[h] = "<em>" + cat.volumes[h].volume +  "  $" + cat.volumes[h].price + "</br>" +"</em>";
// 		$("#cat").append(newCatVolumeArray[h]);
// 	}
// }


// $.ajax({
// 		url: "data/cat.json"
// 	}).done(function(catObject) {
// 		console.log("Cat1", catObject);
// 		catIWantToAdd(catObject);
	
// });

// });