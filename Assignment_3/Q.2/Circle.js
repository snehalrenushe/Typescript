//Object Oriented Programming (OOP)
//Class Defination
var Circle = /** @class */ (function () {
    function Circle(r, pi) {
        this.Radius = r;
        this.PI = pi;
    }
    Circle.prototype.Area = function () {
        var Ans;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var cir1 = new Circle(2, 3.14);
var cir2 = new Circle(4, 3.14);
var Ret;
console.log("By First Object");
Ret = cir1.Area();
console.log("Area of Circe is " + Ret + ".");
console.log("By First Object");
Ret = cir2.Area();
console.log("Area of Circe is " + Ret + ".");
