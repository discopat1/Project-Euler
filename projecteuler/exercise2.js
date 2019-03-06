var num1 = 1;

var num2 = 1;

function fib() {
   var sum = num1 + num2;
   num2 = num1;
   num1 = sum;
}

while (num1 && num2 < 4000000) {
    fib();
}


