function main() : void
{
    var rad : number = 4;
    var area : number = 0;

    area = Area_Of_Circle(rad);
    console.log("Area of Circle is " + area);
}


function Area_Of_Circle(value:number) : number
{
    var PI : number = 3.14;
    var C_Area : number = 0;

    C_Area = PI * value * value;

    return C_Area;
}

main();