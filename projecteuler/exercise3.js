
function factor() {
    var num1 = 333;
    var factorArr = [];
    for (i=0; i<=num1; i++) {
    // first factor out
    if (num1 % i === 0) {
        factorArr.push(i);
        }
    }
    console.log("factored array====", factorArr);
    var primeFactorArr = [];
    factorArr.forEach(num => {
        for (i=2; i<num; i++) {
            if (num % i === 0) {
                return false
            } else {
                primeFactorArr.push(num);
            }
        }
    });
    console.log("primed array===", primeFactorArr);
    
}

factor();
