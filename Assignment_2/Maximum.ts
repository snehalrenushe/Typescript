//int Arr[5] = {10,20,30,40,50};

var Arr:number[] = [10,20,30,40,50];
var Max:number = 0;

Max = Maximum(Arr);
console.log("Maximum Number is : " + Max);

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