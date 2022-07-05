function main() {
    var no = 12;
    var bret;
    bret = CheckEven(no);
    if (bret == true) {
        console.log("It is even number");
    }
    else {
        console.log("It is odd number");
    }
}
function CheckEven(Value) {
    if ((Value % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
