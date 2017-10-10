// initialize variables
var count = 0; // where the game is
var steps = 0; // 1, 2. or 3
var game = []; // numbers counted
var player = ""; // person whose turn it is

do {// end at 21
	// call continuing function for user
	player = "you";
	steps = prompt("Starting at "+count+", how many steps do you count (1-3)");
	count = counting(player,count,steps);
	// call counting function for computer, at random steps each time
	player = "me";
	steps = getRandomInt(1,3); // temporary
	count = counting(player,count,steps);
}
while (count<21);
alert ("You win!"); // temporary

// count and display function
function counting(player,current,steps){
	game = [];
	for (index = 0;index < steps; index++) {
		game[index] = current + index+1;
	}
	alert(player+": "+game);
	current = parseInt(current)+parseInt(steps);
	return current;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}