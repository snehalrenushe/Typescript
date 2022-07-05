
function main() {
    var Num = 21;
    var Fib = 0;
    Fib = Fibonacci(Num);
}
function Fibonacci(value) {
    var No1 = 0;
    var No2 = 1;
    var sum = 0;
    var i = 0;
    while (No1 <= value) {
        console.log(No1);
        sum = No1 + No2;
        No1 = No2;
        No2 = sum;
    }
    return No1;
}
main();
