function main():void
{
    var No : number = 11;
    var bret : boolean;

    bret = Chk_Prime(No);

    if(bret == true)
    {
        console.log("Given Number is Prime Number.");
    }
    else
    {
        console.log("Given Number is Composite Number.");
    }

}

function Chk_Prime(value:number):boolean
{
    if(value % 2 != 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();
