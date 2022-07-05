//Object Oriented Programming (OOP)
//Class Defination
var Arithmatic = /** @class */ (function () {
    function Arithmatic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arithmatic.prototype.Addition = function () {
        var Ans = 0; //Local Variable
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var Ans = 0; //Local Variable
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic;
}());
var Obj1 = new Arithmatic(10, 11);
var Obj2 = new Arithmatic(20, 21);
var Ret = 0;
Ret = Obj1.Addition();
console.log("Addition is " + Ret);
Ret = Obj1.Substraction();
console.log("Substraction is " + Ret);
Ret = Obj2.Addition();
console.log("Addition is " + Ret);
Ret = Obj2.Substraction();
console.log("Substraction is " + Ret);
