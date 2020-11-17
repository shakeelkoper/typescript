// Variables
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// bult in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 20,
	y: 10,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// When to use Annotation
// 1) Function that returns the 'any type
const json = "{'x': 10, 'y': 20}";

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) When we declare variable in one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[1] === "green") {
		foundWord = true;
	}
}

// 3) variable whose type cannot be infered correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
