var start = [1, 2];

var sum = 0;

function fib(arr) {
    return arr[arr.length - 1] + arr[arr.length - 2];
}

while (start[start.length - 1] < 4000000) {
    start.push(fib(start));
  }

  start.forEach(function(n) {
    if (n % 2 === 0) {
      sum += n;
    }

    console.log(sum);
    return sum;
  });
