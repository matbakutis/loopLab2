for (i = 50; i >= 20; i--){
	if ((i % 3) === 0){
		console.log(i);
	};
};

for (i = 0; i >= 0; i++){
	console.log("TO INFINITY AND BEYOND");
};

const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];
for (i = 0; i < classmates.length; i++){
	console.log(classmates[i]);
};

const menu = [{name: "pizza", glutenFree: false},
				{name: "salad", glutenFree: true},
				{name: "donut", glutenFree: false},
				{name: "steak", glutenFree: true},
				{name: "chicken", glutenFree: true},
				{name: "cheeseburger", glutenFree: false}];
const glutenFreeMenu = [];
for (i = 0; i < menu.length; i++){
	if (menu[i].glutenFree === true){
		glutenFreeMenu.push(menu[i]);
	};
};