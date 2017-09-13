for (let i = 50; i >= 20; i--){
	if ((i % 3) === 0){
		console.log(i);
	};
};

for (let i = 0; i >= 0; i++){
	console.log("TO INFINITY AND BEYOND");
};

const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];
for (let i = 0; i < classmates.length; i++){
	if (i % 2 === 0){
		console.log(classmates[i]);		
	};
};

const menu = [{name: "pizza", glutenFree: false},
				{name: "salad", glutenFree: true},
				{name: "donut", glutenFree: false},
				{name: "steak", glutenFree: true},
				{name: "chicken", glutenFree: true},
				{name: "cheeseburger", glutenFree: false}];
const glutenFreeMenu = [];
for (let i = 0; i < menu.length; i++){
	if (menu[i].glutenFree === true){
		glutenFreeMenu.push(menu[i]);
	};
};

const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}];
const goats = [];
for (let i = 0; i < league.length; i++){
	for (let a = 0; a < league[i].players.length; a++){
		if (league[i].players[a].goat === true){
			goats.push(league[i].players[a]);
		};
	};
};