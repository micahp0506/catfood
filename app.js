$(document).ready(function() { 

var newDogArray = [];
var newDogTypeArray = [];

// Dog
function dogIWantToAdd(dog) {
	for (var i = 0; i < dog.dog_brands.length; i++) {
		console.log("2", dog.dog_brands[i]);
		newDogArray[i] = "<p>" + dog.dog_brands[i].brand + "</p>";
		$("#output").append(newDogArray[i]);
		dogTypesToAdd(dog.dog_brands[i]);	
		
	}	
}

function dogTypesToAdd(dog) {
	for (var j = 0; j < dog.types.length; j++) {
		console.log("3", dog.types[j]);
		newDogTypeArray[j] = "<p>" + dog.types[j].type + "</p>";
		$("#output").append(newDogTypeArray[j]);
		dogVolumesToAdd(dog.types[j]);
	}
}

function dogVolumesToAdd(dog) {
	for (var z = 0; z < dog.volumes.length; z++) {
	console.log("3", dog.volumes[z]);
	newDogTypeArray[z] = "<p>" + dog.volumes[z].volume + dog.volumes[z].price + "</p>";
	$("#output").append(newDogTypeArray[z]);
	}

}



$.ajax({
	url: "dog.json"
}).done(function(dogObject) {
	console.log("1", dogObject);
	dogIWantToAdd(dogObject);
	
});



});