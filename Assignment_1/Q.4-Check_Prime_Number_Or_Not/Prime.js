
function main() {
    var No = 11;
    var bret;
    bret = Chk_Prime(No);
    if (bret == true) {
        console.log("Given Number is Prime Number.");
    }
    else {
        console.log("Given Number is Composite Number.");
    }
}
function Chk_Prime(value) {
    if (value % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
