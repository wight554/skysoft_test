class Vehicle {
    constructor(name, fuel) {
        console.log(`I'm ${name}`)
        this.x = 0;
        this.y = 0;
        this.step = 1;
        this.name = name;
        this.fuel = fuel;
    }
    
    getCoords() {
        return `(${this.x}, ${this.y})`;
    }
  
    getFuel() {
        return `The fuel is ${this.fuel}L`;
    }
  
    useFuel() {
        this.fuel = this.fuel - this.step;
    }
  
    moveForward() {
      	this.useFuel();
        this.x = this.x + this.step;
        return `Forward: ${this.getCoords()} ${this.getFuel()}`;
    }
  
    moveBack() {
      	this.useFuel();
        this.x = this.x - this.step;
        return `Back: ${this.getCoords()} ${this.getFuel()}`;
    }
}

let v = new Vehicle('Tractor', 100);
console.log(v.moveForward()); // '(1, 0) The fuel is 99L'  
console.log(v.moveBack()); // '(0, 0) The fuel is 98L'

class Car extends Vehicle {
    constructor(name, fuel, nitro) {
        super(name, fuel, nitro)
        this.nitro = false
    }

    canMove() {
        return this.fuel >= this.step
    }

    switchNitroOn() {
        if(!this.nitro) return 'This car can\'t use nitro'
        this.step = 2
        return 'Nitro: ON'
    }
    switchNitroOff() {
        if(!this.nitro) return 'This car can\'t use nitro'
        this.step = 1
        return 'Nitro: OFF'
    }

    moveLeft() {
        if(!this.canMove()) return 'Can\'t move anymore, fuel low'
      	this.useFuel();
        this.y = this.y + this.step;
        return `Left: ${this.getCoords()} ${this.getFuel()}`;
    }
  
    moveRight() {
        if(!this.canMove()) return 'Can\'t move anymore, fuel low'
      	this.useFuel();
        this.y = this.y - this.step;
        return `Right: ${this.getCoords()} ${this.getFuel()}`;
    }

    moveForward() {
        if(!this.canMove()) return 'Can\'t move anymore, fuel low'
        return super.moveForward()
    }
  
    moveBack() {
        if(!this.canMove()) return 'Can\'t move anymore, fuel low'
        return super.moveBack()
    }
}

let a = new Car('NitroCar', 8, true); // 'I'm NitroCar'
console.log(a.moveForward()); // '(1, 0) The fuel is 7L'
console.log(a.switchNitroOn()); // 'Nitro: ON'  
console.log(a.moveForward()); // '(3, 0) The fuel is 5L'
console.log(a.moveLeft()); // '(3, 2) The fuel is 4L'
console.log(a.switchNitroOff()); // 'Nitro: OFF'  
console.log(a.moveBack()); // '(2, 2) The fuel is 2L'
console.log(a.moveRight()); // '(2, 1) The fuel is 1L'
console.log(a.moveRight()); // '(2, 0) The fuel is 0L'
console.log(a.moveLeft()); // 'Can't move anymore, fuel low'
let b = new Car('NoNitroCar', 8, false); // 'I'm NoNitroCar'
console.log(a.switchNitroOn()); // 'This car can't use nitro'  
