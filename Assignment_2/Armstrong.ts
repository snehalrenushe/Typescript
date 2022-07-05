var No : number = 153;
var add : number = 0;
var arm : number = 0;

arm = ChkArmstrong(No);

if(arm == No)
{
    console.log("Given number is Armstrong.");
}
else
{
    console.log("Given number is Not Armstrong.");
}

function ChkArmstrong(Num:number)
{
    var sum : number = 0;
    var temp : number = Num;
    var rem : number = 0;

    while(temp > 0)
    {
        rem = temp % 10;
        sum += rem * rem * rem;
        temp = temp/10;
    }

    return Num;
}

