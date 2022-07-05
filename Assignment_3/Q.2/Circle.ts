//Object Oriented Programming (OOP)

//Class Defination
class Circle
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

var cir1 = new Circle(2,3.14);
var cir2 = new Circle(4,3.14);

var Ret : number;

console.log("By First Object");

Ret = cir1.Area();
console.log("Area of Circe is "+ Ret +".");

console.log("By First Object");

Ret = cir2.Area();
console.log("Area of Circe is "+ Ret +".");



