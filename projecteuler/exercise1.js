// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.



module.exports =  {
    findMultiples: function(num) {
        if (num%3||5 === 0) {
        } else {
            return false;
        }
    },
    addNumbers: function() {
        var sum=0;
        for (i = 0; i < 999; i++) {
            if(i%3||5 === 0) {
                sum+=i;
                var numArray = [];
                numArray.push(sum);
            }
        }
        var sumIndex = numArray.length-1;
        finalSum = numArray[sumIndex];
        console.log(finalSum);
        return finalSum;
    }
}
    function addNumbers() {
        var sum=0;
        for (i = 0; i < 999; i++) {
            if(i%3||5 === 0) {
                sum+=i;
                var numArray = [];
                numArray.push(sum);
            }
        }
        var sumIndex = numArray.length-1;
        finalSum = numArray[sumIndex];
        console.log(finalSum);
        return finalSum;
    }
    addNumbers();