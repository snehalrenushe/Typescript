//Object Oriented Programming (OOP)

//Class Defination
class Arithmetic
{
    //Characteristics
    Number1:number;
    Number2:number;

    constructor(a:number,b:number)  
    {
        this.Number1 = a;
        this.Number2 = b;
    }

    Addition()  //Behavior
    {
        var Ans : number;   //Local Variable
        Ans = this.Number1 + this.Number2;
        return Ans;
    }

    Substraction()     
    {
        var Ans : number;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }

    Multiplication()
    {
        var Ans : number;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }

    Division()
    {
        var Ans : number;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }
}

var Obj1 = new Arithmetic(20,10);   //Creating Object
var Obj2 = new Arithmetic(22,20);

var Ret : number = 0;

console.log("By First Object");

Ret = Obj1.Addition();
console.log("Addition is "+ Ret);

Ret = Obj1.Substraction();
console.log("Substraction is "+ Ret);

Ret = Obj1.Multiplication();
console.log("Multiplication is "+Ret);

Ret = Obj1.Division();
console.log("Division is "+Ret);

console.log("By Second Object");

Ret = Obj2.Addition();
console.log("Addition is "+ Ret);

Ret = Obj2.Substraction();
console.log("Substraction is "+ Ret);

Ret = Obj2.Multiplication();
console.log("Multiplication is "+Ret);

Ret = Obj2.Division();
console.log("Division is "+Ret);