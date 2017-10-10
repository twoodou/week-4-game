var gameStarted = false;
var cartmanHP = 100;
var kennyHP = 100;
var buttersHP = 100;
var tweekHP = 100;

var userCharPick;

// var audioElement = document.createElement("audio");
//    audioElement.setAttribute("src", "Assets/captainplanet24.mp3");

// Game start - click function for portraits

$(".startButton").on("click", function() {

	if (gameStarted === false) {
		userCharPick = this.value;
		gameStarted = true;
		$(".cartmanHP").text(cartmanHP + " HP");
		$(".kennyHP").text(kennyHP + " HP");
		$(".buttersHP").text(buttersHP + " HP");
		$(".tweekHP").text(tweekHP + " HP");
		$(".dynamicCharHeader").text("You've chosen " + userCharPick);
	}

	// If user picks Cartman, enlarge his section
	if (userCharPick === "Cartman") {
			$("div.cartman").toggleClass("col-sm-12");
			$("div.cartman").toggleClass("col-sm-3");

			// Changes button color from blue to green
			$(".cartman-button").toggleClass("btn-primary");
			$(".cartman-button").toggleClass("btn-success");
		};

	// If user picks Kenny, enlarge his section
	if (userCharPick === "Kenny") {
			$("div.kenny").toggleClass("col-sm-12");
			$("div.kenny").toggleClass("col-sm-3");
		};

	// If user picks Butters, enlarge his section
	if (userCharPick === "Butters") {
			$("div.butters").toggleClass("col-sm-12");
			$("div.butters").toggleClass("col-sm-3");
		};

	// If user picks Tweek, enlarge his section
	if (userCharPick === "Tweek") {
			$("div.tweek").toggleClass("col-sm-12");
			$("div.tweek").toggleClass("col-sm-3");
		};
		
		// $("#kenny").removeClass();
		// $("#kenny").addClass("col-md-12");

		// $("#butters").toggleClass(".col-sm-3");
		// $("#butters").toggleClass(".col-sm-4");

		// $("#kenny").toggleClass(".col-sm-3");
		// $("#kenny").toggleClass(".col-sm-4");

		// $("#tweek").toggleClass(".col-sm-3");
		// $("#tweek").toggleClass(".col-sm-4");
	});

