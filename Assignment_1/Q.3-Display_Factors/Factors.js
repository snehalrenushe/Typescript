
var No1 = 20;
var Fact = 0;
Fact = Display_Factors(No1);
function Display_Factors(value) {
    var i = 0;
    console.log("Factors of Given Number are : ");
    for (i = 1; i <= 10; i++) {
        if (value % i == 0)
            console.log(i);
    }
    return i;
}
