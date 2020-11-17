const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log({ message });
	// return undefined
	// return null
};

// use Never only when you dont want to return anything not even undefined and null
const thowError = (message: string): never => {
	throw new Error(message);
};

// Destructuring with Annotations
const todayWeather = {
	date: new Date(),
	weather: "sunny",
};
const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todayWeather);
