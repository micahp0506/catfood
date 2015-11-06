$(document).ready(function() { 

var newDogArray = [];
var newDogTypeArray = [];
var newDogVolumeArray = [];

// Dogfood
function dogIWantToAdd(dog) {
	for (var i = 0; i < dog.dog_brands.length; i++) {
		console.log("dog2", dog.dog_brands[i]);
		newDogArray[i] = "<p>" + dog.dog_brands[i].brand + "</p>";
		$("#output").append(newDogArray[i]);
		dogTypesToAdd(dog.dog_brands[i]);	
		
	}	
}

function dogTypesToAdd(dog) {
	for (var j = 0; j < dog.types.length; j++) {
		console.log("dog3", dog.types[j]);
		newDogTypeArray[j] = "<p>" + dog.types[j].type + "</p>";
		$("#output").append(newDogTypeArray[j]);
		dogVolumesToAdd(dog.types[j]);
	}
}

function dogVolumesToAdd(dog) {
	for (var z = 0; z < dog.volumes.length; z++) {
	console.log("dog4", dog.volumes[z]);
	newDogVolumeArray[z] = "<p>" + dog.volumes[z].volume + dog.volumes[z].price + "</p>";
	$("#output").append(newDogVolumeArray[z]);
	}

}



$.ajax({
	url: "dog.json"
}).done(function(dogObject) {
	console.log("Dog1", dogObject);
	dogIWantToAdd(dogObject);
	
});

var newCatArray = [];
var newCatBreedsArray = [];
var newCatTypeArray = [];
var newCatVolumeArray = [];

// Catfood
function catIWantToAdd(cat) {
	for (var i = 0; i < cat.cat_brands.length; i++) {
		console.log("cat2", cat.cat_brands[i]);
		newCatArray[i] = "<p>" + cat.cat_brands[i].brand + "</p>";
		$("#output").append(newCatArray[i]);
		catBreedsToAdd(cat.cat_brands[i]);	
		
	}	
}

function catBreedsToAdd(cat) {
	for (var j = 0; j < cat.breeds.length; j++) {
		console.log("cat3", cat.breeds[j]);
		newCatBreedsArray[j] = "<p>" + cat.breeds[j].breed + "</p>";
		$("#output").append(newCatBreedsArray[j]);
		catTypeToAdd(cat.breeds[j]);
	}
}

function catTypeToAdd(cat) {
	for (var z = 0; z < cat.types.length; z++) {
		console.log("cat4", cat.types[z]);
		newCatTypeArray[z] = "<p>" + cat.types[z].type + "</p>";
		$("#output").append(newCatTypeArray[z]);
		catVolumeToAdd(cat.types[z]);
	}

}

function catVolumeToAdd(cat) {
	for (var h = 0; h < cat.volumes.length; h++) {
		console.log("cat5", cat.volumes[h]);
		newCatVolumeArray[h] = "<p>" + cat.volumes[h].volume + cat.volumes[h].price +"</p>";
		$("#output").append(newCatVolumeArray[h]);
	}
}


$.ajax({
	url: "cat.json"
}).done(function(catObject) {
	console.log("Cat1", catObject);
	catIWantToAdd(catObject);
	
});

});