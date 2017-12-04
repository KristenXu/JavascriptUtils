function Plane(){
    this.name = 'plane';
    this.colors = ['red', 'yellow', 'blue'];
}

Plane.prototype.getColors = function () {
    return this.colors
}

module.exports = Plane