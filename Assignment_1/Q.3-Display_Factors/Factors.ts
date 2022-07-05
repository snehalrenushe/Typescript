function main() : void
{
    var No1 : number = 20;
    var Fact : number = 0;

    Fact = Display_Factors(No1);
}

function Display_Factors(value:number) : number
{
    var i : number = 0;

    console.log("Factors of Given Number are : ");
    for(i = 1 ; i <= 10 ; i++)
    {
        if(value % i == 0 )
        console.log(i);
        return i;
    }
    
}

main();