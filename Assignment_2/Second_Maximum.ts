//int Arr[5] = {10,20,30,40,50};

var Arr:number[] = [10,20,30,40,50];
var Max:number = 0;
var Sec_Max:number = 0;
var j:number = 0;

Max = Maximum(Arr);
console.log("Maximum Number is : " + Max);

for(j = 1 ; j < Arr.length; j++)
{
    if(Arr[j] > Sec_Max && Arr[j] != Max)
    {
        Sec_Max = Arr[j];
    }
}

console.log("Second Maximum Number is : " + Sec_Max);

function Maximum(Arr1:number[])
{
    var i:number = 0;
    var Max_number:number = Arr1[0];

    for(i = 1 ; i < Arr1.length ; i++)
    {
        if(Arr1[i] > Max_number)
        {
            Max_number = Arr[i];
        }
    }
    return Max_number;
}
