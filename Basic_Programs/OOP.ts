//Object Oriented Programming (OOP)

//Class Defination
class Arithmatic
{
    //Characteristics
    No1:number;
    No2:number;

    constructor(a:number,b:number)
    {
        this.No1 = a;
        this.No2 = b;
    }

    Addition()  //Behavior
    {
        var Ans : number = 0;       //Local Variable
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction()  //Behavior
    {
        var Ans : number = 0;       //Local Variable
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var Obj1 = new Arithmatic(10,11);
var Obj2 = new Arithmatic(20,21);

var Ret:number = 0;

Ret = Obj1.Addition();
console.log("Addition is " + Ret);

Ret = Obj1.Substraction();
console.log("Substraction is " + Ret);

Ret = Obj2.Addition();
console.log("Addition is " + Ret);

Ret = Obj2.Substraction();
console.log("Substraction is " + Ret);