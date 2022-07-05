var Arithmetic = /** @class */ (function () {
    function Arithmetic(a, b) {
        this.Number1 = a;
        this.
            Number2 = b;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans; //Local Variable
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmetic;
}());
var Obj1 = new Arithmetic(20, 10);
var Obj2 = new Arithmetic(22, 20);
var Ret = 0;
console.log("By First Object");
Ret = Obj1.Addition();
console.log("Addition is " + Ret);
Ret = Obj1.Substraction();
console.log("Substraction is " + Ret);
Ret = Obj1.Multiplication();
console.log("Multiplication is " + Ret);
Ret = Obj1.Division();
console.log("Division is " + Ret);
console.log("By Second Object");
Ret = Obj2.Addition();
console.log("Addition is " + Ret);
Ret = Obj2.Substraction();
console.log("Substraction is " + Ret);
Ret = Obj2.Multiplication();
console.log("Multiplication is " + Ret);
Ret = Obj2.Division();
console.log("Division is " + Ret);
