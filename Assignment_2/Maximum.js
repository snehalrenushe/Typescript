//int Arr[5] = {10,20,30,40,50};
var Arr = [10, 20, 30, 40, 50];
var Max = 0;
Max = Maximum(Arr);
console.log("Maximum Number is : " + Max);
function Maximum(Arr1) {
    var i = 0;
    var Max_number = Arr1[0];
    for (i = 1; i < Arr1.length; i++) {
        if (Arr1[i] > Max_number) {
            Max_number = Arr[i];
        }
    }
    return Max_number;
}
