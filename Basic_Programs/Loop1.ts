//for, while,do-while

function Sequence():void
{
    console.log("Sequence Hello");
    console.log("Sequence Hello");
    console.log("Sequence Hello");
    console.log("Sequence Hello");
    console.log("Sequence Hello");
}

function For()
{
    var i:number = 0;

    for(i = 1;i<=5;i++)
    {
        console.log("For Hello");
    }
}

function While()
{
    var i:number = 0;

    while(i<=5)
    {
        console.log("While Hello");
        i++;
    }
}

Sequence();
For();
While();
