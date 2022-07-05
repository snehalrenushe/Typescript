var Arr:number[] = [10,20,30,40,50];
var Sum:number = 0;

Sum = Summation(Arr);
console.log("Maximum Number is : " + Sum);

function Summation(Arr1:number[])
{
    var i:number = 0;
    var add:number = 0;

    for(i = 0 ; i < Arr1.length ; i++)
    {
        add += Arr1[i];
    }

    return add;
}

