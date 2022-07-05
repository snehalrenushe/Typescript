//Object Oriented Programming (OOP)

//Class Defination
class circle
{
    Radius:number;
    PI:number;

    constructor(r:number,pi:number)
    {
        this.Radius = r;
        this.PI = pi;
    }

    Area()
    {
        var Ans : number;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

class circleX extends circle
{
    circumference()
    {
        var Ans : number;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var cir1 = new circle(2,3.14);
var cir2 = new circle(4,3.14);

var Ret : number;

console.log("By First Object");

Ret = cir1.Area();
console.log("Area of Circe is "+ Ret +".");

console.log("By First Object");

Ret = cir2.Area();
console.log("Area of Circe is "+ Ret +".");

var cir1X = new circleX(2,3.14);
var cir2X = new circleX(4,3.14);

var Ret : number;

console.log("By First Object");

Ret = cir1X.circumference();
console.log("Circumference of Circe is "+ Ret +".");

console.log("By First Object");

Ret = cir2X.circumference();
console.log("Circumference of Circe is "+ Ret +".");

