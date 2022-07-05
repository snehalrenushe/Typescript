var No1 = 10;
var No2 = 25;
var No3 = 15;
var Max = 0;
Max = Maximum(No1, No2, No3);
console.log("Maximum Number is " + Max);
function Maximum(value1, value2, value3) {
    var Max_No = 0;
    if ((value1 > value2) && (value1 > value3)) {
        Max_No = value1;
        return Max_No;
    }
    else if ((value2 > value1) && (value2 > value3)) {
        Max_No = value2;
        return Max_No;
    }
    else {
        Max_No = value3;
        return Max_No;
    }
}
