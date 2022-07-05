function main():void
{
    var No1 : number = 10;
    var No2 : number = 25;
    var No3 : number = 15;
    var Max : number = 0;
    
    Max = Maximum(No1,No2,No3);
    console.log("Maximum Number is " + Max + ".");    
}

function Maximum(value1 : number,value2 : number,value3 : number):number
{
    var Max_No : number = 0;

    if((value1 > value2) && (value1 > value3))
    {
        Max_No = value1;
        return Max_No;
    }
    else if((value2 > value1) && (value2 > value3))
    {
        Max_No = value2;
        return Max_No;
    }
    else
    {
        Max_No = value3;
        return Max_No;
    }
}

main();