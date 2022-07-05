//Object Oriented Programming (OOP)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class Defination
var circle = /** @class */ (function () {
    function circle(r, pi) {
        this.Radius = r;
        this.PI = pi;
    }
    circle.prototype.Area = function () {
        var Ans;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return circle;
}());
var circleX = /** @class */ (function (_super) {
    __extends(circleX, _super);
    function circleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    circleX.prototype.circumference = function () {
        var Ans;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return circleX;
}(circle));
var cir1 = new circle(2, 3.14);
var cir2 = new circle(4, 3.14);
var Ret;
console.log("By First Object");
Ret = cir1.Area();
console.log("Area of Circe is " + Ret + ".");
console.log("By First Object");
Ret = cir2.Area();
console.log("Area of Circe is " + Ret + ".");
var cir1X = new circleX(2, 3.14);
var cir2X = new circleX(4, 3.14);
var Ret;
console.log("By First Object");
Ret = cir1X.circumference();
console.log("Circumference of Circe is " + Ret + ".");
console.log("By First Object");
Ret = cir2X.circumference();
console.log("Circumference of Circe is " + Ret + ".");
