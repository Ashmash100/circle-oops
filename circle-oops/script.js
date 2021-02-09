var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return ((Math.PI) * this.radius * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * (Math.PI) * this.radius);
    };
    return Circle;
}());
var c = new Circle(2.2, 'Orange');
c.setRadius(3.3);
c.setColor("Green");
console.log("Radius: " + c.getRadius());
console.log("SetRaduis value: " + c.getRadius());
console.log("getColor: " + c.getColor());
console.log("Setcolour value: " + c.getColor());
console.log(c.toString());
console.log("Area: " + c.getArea());
console.log("Circumference: " + c.getCircumference());
