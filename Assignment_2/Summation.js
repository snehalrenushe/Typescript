var Arr = [10, 20, 30, 40, 50];
var Sum = 0;
Sum = Summation(Arr);
console.log("Maximum Number is : " + Sum);
function Summation(Arr1) {
    var i = 0;
    var add = 0;
    for (i = 0; i < Arr1.length; i++) {
        add += Arr1[i];
    }
    return add;
}
