const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const carModel = carMakers[0];
const myCarModel = carMakers.pop();

// Prevent Incompatible values
// carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
	return car;
});

// Flexible Types
const importantDates: (Date | String)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-12-12");
importantDates.push(new Date());
