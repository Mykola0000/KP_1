function Airplane(color, avgSpeed, maxAltitude, brand, destination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.destination = destination;
}


Airplane.setProperties = function(obj, color, avgSpeed, maxAltitude, brand, destination) {
    obj.color = color;
    obj.avgSpeed = avgSpeed;
    obj.maxAltitude = maxAltitude;
    obj.brand = brand;
    obj.destination = destination;
};

у
var airplane1 = {};
Airplane.setProperties(airplane1, 'black', 600, 5000, 'American Airline', 'Chicago');
console.log(airplane1);
