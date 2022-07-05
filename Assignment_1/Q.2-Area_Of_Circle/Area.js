var rad = 4;
var area = 0;
var PI = 3.14;
area = Area_Of_Circle(rad);
console.log("Area of Circle is " + area);
function Area_Of_Circle(value) {
    var C_Area = 0;
    C_Area = PI * rad * rad;
    return C_Area;
}
