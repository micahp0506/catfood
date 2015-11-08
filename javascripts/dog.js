define(["jquery", "hbs", "dog", "hbs!../templates/dog"], 
function($, Handlebars, dog, dogtemp) {

// Returning to DOM songs to main content
	return {
		 dogIWantToAdd: function(dogList) {
		 	console.log("yep2");
			console.log("dogList", dogList);
			// Appending dog info(brand, types, volume, and price to DOM)
			$("#dog_output").append(dogtemp(dogList));
			}
		};
});		