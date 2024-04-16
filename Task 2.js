
function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.pointOfDestination = pointOfDestination;
}


Jet.prototype.AssignPilot = function(name, yearsOfExperience, hasChildren) {
    this.pilot = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasChildren: hasChildren
    };
};


var myJet = new Jet('blue', 1000, 12000, 'Boeing', 'New York');


myJet.AssignPilot('John Smith', 10, true);


console.log(myJet);
