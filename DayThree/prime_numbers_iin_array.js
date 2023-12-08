var array_of_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Anonymous function

let prime_numbers_anonymous = function (numbers) {
    console.log('-Anonymous Function-')
    let prime_numbers = [];
    for (each_number of numbers) {
        testPrime = 0;
        for (testNum = 1; testNum <= 100; testNum = testNum + 1) {
            let testRes = each_number % testNum;
            if (testRes === 0) {
                testPrime = testPrime + 1;
            }
        }
        if (testPrime === 2) {
            prime_numbers.push(each_number)
        }
    }
    console.log(prime_numbers)
}

prime_numbers_anonymous(array_of_numbers);

// Immediately invoked function expression
(function prime_numbers_iife() {
    console.log('-IIFE Function-')
    let prime_numbers = [];
    for (each_number of array_of_numbers) {
        testPrime = 0;
        for (testNum = 1; testNum <= 100; testNum = testNum + 1) {
            let testRes = each_number % testNum;
            if (testRes === 0) {
                testPrime = testPrime + 1;
            }
        }
        if (testPrime === 2) {
            prime_numbers.push(each_number)
        }
    }
    console.log(prime_numbers)
})();

// Arrow function
let prime_numbers_arrow = (numbers) => {
    console.log('-Arrow Function-')
    let prime_numbers = [];
    for (each_number of numbers) {
        testPrime = 0;
        for (testNum = 1; testNum <= 100; testNum = testNum + 1) {
            let testRes = each_number % testNum;
            if (testRes === 0) {
                testPrime = testPrime + 1;
            }
        }
        if (testPrime === 2) {
            prime_numbers.push(each_number)
        }
    }
    console.log(prime_numbers)
}

prime_numbers_arrow(array_of_numbers);
