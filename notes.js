var fruits = ["apple", "banana", "cherry"];

//1A. write a function called outputFruitOld that consoles every fruit in a fruit array.

function outputFruitOld (array) {
	for (i = 0; i < array.length; i++){
		console.log(array[i]);
	}

}

// outputFruitOld(fruits);

//1B. rewrite using forEach array method.

function outputFruits (element, index) {
	console.log(element);
	console.log("array[" + index + "] " + element);
}

fruits.forEach(outputFruits);

fruits.forEach(fruit) {
	console.log(fruit);
});

//2A. write a function called backwardFruitsOld that reverse the letters in each word in the fruits array.

function backwardFruitsOld(array){
	var backwardFruit = [];
	for (i = 0; i < array.length; i++){
		backwardFruit.push(array[i].split("").reverse().join(""));
	}
	console.log(backwardFruit);
}

backwardFruitsOld(fruits);

//for loop runs faster than a forEach loop

//2B. rewrite using map array method.

var backwardsFruit = fruits.map(function(fruit) {
	return fruit.split("").reverse().join("");	
});
console.log(backwardsFruit);

 //3A. Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

function fiveLettersOnlyOld (array){
	var filteredFruits = [];
	for (var i = 0; i < array.length; i++) {
		if(array[i].length === 5) {
		  filteredFruits.push(array[i]);
		}
	}
	console.log(filteredFruits);
}
fiveLettersOnlyOld(fruits);

 //3B. rewrite using filter array method.
 function filterIt (cat){
 	if(cat.length === 5){
	   return cat;
 	}
 }

var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits);

//4A. write a function called addzOld that returns the sum of an array.
var numbers = ["0", "1", "2", "3", "4"];

function addzOld(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i];
	}
	console.log(sum);
}

addzOld(numbers);

//4B. rewrite using reduce array method.

var sum = [0,1,2,3,4].reduce(function(previousValue, currentValue, index){
	console.log("current value" + index);
	console.log("previousValue", previousValue);
	console.log("currentValue", currentValue);
	return previousValue + currentValue;
});
console.log(sum);

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach(function(val)
// {
//     if(val % 2 === 0) { console.log(val)}
// });
