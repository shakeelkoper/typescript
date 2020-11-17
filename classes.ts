class Vehicle {
	constructor(public color: string) {}
	protected honk(): void {
		console.log("Beep");
	}
}

const vehicle = new Vehicle("Orange");
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	private drive(): void {
		console.log("vroom");
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(4, "Green");
car.startDrivingProcess();
