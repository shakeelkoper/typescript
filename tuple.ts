const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 4];
const sprite: Drink = ["white", true, 2];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
	horsePower: 400,
	weight: 3354,
};
