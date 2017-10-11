var gameStarted = false;
var startingHP = 100;

var cartmanHP;
var kennyHP;
var buttersHP;
var tweekHP;

var cHP;
var kHP;
var bHP;
var tHP;

var userCharPick;

var numberOfAttacks = 0;
var attackDamage = Math.floor(Math.random() * 10);
var attackDamageArray = [];

// var audioElement = document.createElement("audio");
//    audioElement.setAttribute("src", "Assets/captainplanet24.mp3");

// Game start - click function for portraits

$(".startButton").on("click", function() {

	if (gameStarted === false) {
		userCharPick = this.value;
		gameStarted = true;
		$(".cartmanBarText").text(startingHP + " HP");
		$(".kennyBarText").text(startingHP + " HP");
		$(".buttersBarText").text(startingHP + " HP");
		$(".tweekBarText").text(startingHP + " HP");
		$(".dynamicCharHeader").text("You've chosen " + userCharPick);
		cHP = document.getElementById("cartmanBar").style.width = "100%";
		kHP = document.getElementById("kennyBar").style.width = "100%";
		bHP = document.getElementById("buttersBar").style.width = "100%";
		tHP = document.getElementById("tweekBar").style.width = "100%";
	}

	if (userCharPick === "Cartman") {

		//  Changes button colors based off character picked 
		$(".cartmanAttackButton").html(
			"<button class='attackKenny center-block'>Attack Kenny!</button>" +
			"<button class='attackButters center-block'>Attack Butters!</button>" +
			"<button class='attackTweek center-block'>Attack Tweek!</button>");
		// $(".cartman-button").text("Attack!");
		$(".cartman-button").addClass("invisible");
		$(".kenny-button").addClass("invisible");
		$(".butters-button").addClass("invisible");
		$(".tweek-button").addClass("invisible");
		document.getElementById("kenny startingPortrait").style.border = "5px red solid";
		
	}

	$(".attackKenny").on("click", function() {
		kennyNewHP = parseInt(kHP) - attackDamage + "%";
		kHP = document.getElementById("kennyBar").style.width = kennyNewHP;
		attackDamage = Math.floor(Math.random() * 20);

		updateCharacterHealthBars();

		// If Kenny dies, kill Kenny

		var kennyDead = parseInt(kHP);
		if (kennyDead <= 0) {
			kennyDies();
		};
	});

	$(".attackButters").on("click", function() {
		buttersNewHP = parseInt(bHP) - attackDamage + "%";
		bHP = document.getElementById("buttersBar").style.width = buttersNewHP;
		attackDamage = Math.floor(Math.random() * 20);

		updateCharacterHealthBars();

		// If Kenny dies, kill Kenny

		var buttersDead = parseInt(bHP);
		if (buttersDead <= 0) {
			buttersDies();
		};
	});

	$(".attackTweek").on("click", function() {
		tweekNewHP = parseInt(tHP) - attackDamage + "%";
		tHP = document.getElementById("tweekBar").style.width = tweekNewHP;
		attackDamage = Math.floor(Math.random() * 20);

		updateCharacterHealthBars();

		// If Kenny dies, kill Kenny

		var tweekDead = parseInt(tHP);
		if (tweekDead <= 0) {
			tweekDies();
		};
	});

	$(".attackCartman").on("click", function() {
		cartmanNewHP = parseInt(cHP) - attackDamage + "%";
		cHP = document.getElementById("cartmanBar").style.width = cartmanNewHP;
		attackDamage = Math.floor(Math.random() * 20);

		updateCharacterHealthBars();

		// If Kenny dies, kill Kenny

		var cartmanDead = parseInt(cHP);
		if (cartmanDead <= 0) {
			cartmanDies();
		};
	});

	function updateCharacterHealthBars() {

		// console.log(kHP);
		$(".cartmanBarText").text(parseInt(cHP));
		$(".kennyBarText").text(parseInt(kHP));
		$(".buttersBarText").text(parseInt(bHP));
		$(".tweekBarText").text(parseInt(tHP));

	};

	function kennyDies () {
		$(".dynamicCharHeader").text("OMG you've killed Kenny!");
			document.getElementById("kenny startingPortrait").style.border = "none";
			document.getElementById("kenny startingPortrait").innerHTML="<img src='assets/images/deadKenny.gif' height='150px' width='auto'>";
			document.getElementById("butters startingPortrait").style.border = "5px red solid";
			$(".attackKenny").hide();
	};

	function buttersDies () {
		$(".dynamicCharHeader").text("There's gonna be heck to pay, heck I tell ya!");
			document.getElementById("kenny startingPortrait").style.border = "none";
			document.getElementById("kenny startingPortrait").innerHTML="<img src='assets/images/Butters-mantequilla.png' height='150px' width='auto'>";
			// document.getElementById("butters startingPortrait").style.border = "5px red solid";
			$(".attackButters").hide();
	};

	function tweekDies () {
		$(".dynamicCharHeader").text("AAAHHHHHhhhhh!");
			document.getElementById("tweek startingPortrait").style.border = "none";
			// document.getElementById("tweek startingPortrait").innerHTML="<img src='assets/images/deadKenny.gif' height='150px' width='auto'>";
			// document.getElementById("butters startingPortrait").style.border = "5px red solid";
			$(".attackTweek").hide();
	};

	function cartmanDies () {
		$(".dynamicCharHeader").text("Respect my autho....ri...tuhhh");
			document.getElementById("cartman startingPortrait").style.border = "none";
			document.getElementById("cartman startingPortrait").innerHTML="<img src='assets/images/cartmanCrying.png' height='150px' width='auto'>";
			// document.getElementById("butters startingPortrait").style.border = "5px red solid";
			$(".attackCartman").hide();
	};

	// // If user picks Cartman, enlarge his section
	// if (userCharPick === "Cartman") {
	// 		$("div.cartman").toggleClass("col-sm-12");
	// 		$("div.cartman").toggleClass("col-sm-3");

	// 		// Changes button color from blue to green
	// 		$(".cartman-button").toggleClass("btn-primary");
	// 		$(".cartman-button").toggleClass("btn-success");
	// 	};

	// // If user picks Kenny, enlarge his section
	// if (userCharPick === "Kenny") {
	// 		$("div.kenny").toggleClass("col-sm-12");
	// 		$("div.kenny").toggleClass("col-sm-3");
	// 	};

	// // If user picks Butters, enlarge his section
	// if (userCharPick === "Butters") {
	// 		$("div.butters").toggleClass("col-sm-12");
	// 		$("div.butters").toggleClass("col-sm-3");
	// 	};

	// // If user picks Tweek, enlarge his section
	// if (userCharPick === "Tweek") {
	// 		$("div.tweek").toggleClass("col-sm-12");
	// 		$("div.tweek").toggleClass("col-sm-3");
	// 	};
		
		// $("#kenny").removeClass();
		// $("#kenny").addClass("col-md-12");

		// $("#butters").toggleClass(".col-sm-3");
		// $("#butters").toggleClass(".col-sm-4");

		// $("#kenny").toggleClass(".col-sm-3");
		// $("#kenny").toggleClass(".col-sm-4");

		// $("#tweek").toggleClass(".col-sm-3");
		// $("#tweek").toggleClass(".col-sm-4");

		// var numberOfAttacks = 0;
		// var initialAttack = Math.floor(Math.random() * 10);
		// var attackDamageArray = [];

		// for (var i = 0; i < 100; i++) {
		// 	attackDamageArray[i].push(i);
		// };

	});

