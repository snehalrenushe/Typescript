var No = 153;
var add = 0;
var arm = 0;
arm = ChkArmstrong(No);
if (arm == No) {
    console.log("Given number is Armstrong.");
}
else {
    console.log("Given number is Not Armstrong.");
}
function ChkArmstrong(Num) {
    var sum = 0;
    var temp = Num;
    var rem = 0;
    while (temp > 0) {
        rem = temp % 10;
        sum += rem * rem * rem;
        temp = temp / 10;
    }
    return Num;
}
