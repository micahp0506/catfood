define(["jquery", "hbs", "cat", "hbs!../templates/cat"], 
function($, Handlebars, cat, cattemp) {

// Returning to DOM songs to main content
	return {
		 catIWantToAdd: function(catList) {
		 	console.log("cat yep");
			console.log("catList", catList);
			// Appending cat info(brand, types, volume, and price to DOM)
			$("#cat_output").append(cattemp(catList));
			}
		};
});	