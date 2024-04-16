function Airplane(color, avgSpeed, maxAltitude, brand, destination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.destination = destination;
}

var airplane1 = new Airplane('black', 600, 5000, 'American Airline', 'Chicago');


console.log(airplane1);

