
function main() : void
{
    var Num : number = 21;
    var Fib : number = 0;

    Fib = Fibonacci(Num);
}

function Fibonacci(value:number) : number
{
    var No1 : number = 0;
    var No2 : number = 1;
    var sum : number = 0;
    
    while(No1 <= value)
    {
        console.log(No1);
        sum = No1 + No2;
        No1 = No2;
        No2 = sum;
        return No1;
    }
}

main();