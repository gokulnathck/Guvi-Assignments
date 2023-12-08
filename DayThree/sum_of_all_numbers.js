var array_of_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Anonymous function

let sum_of_numbers_anonymous = function (numbers) {
    console.log('-Anonymous Function-')
    let sum = 0;
    for (each_number of numbers) {
        sum += each_number
    }
    console.log('Sum :', sum);
}

sum_of_numbers_anonymous(array_of_numbers);

// Immediately invoked function expression
(function sum_of_numbers_iife() {
    console.log('-IIFE Function-')
    let sum = 0;
    for (each_number of array_of_numbers) {
        sum += each_number
    }
    console.log('Sum :', sum);
})();

// Arrow function
let sum_of_numbers_arrow = (numbers) => {
    console.log('-Arrow Function-')
    let sum = 0;
    for (each_number of numbers) {
        sum += each_number
    }
    console.log('Sum :', sum);
}

sum_of_numbers_arrow(array_of_numbers);
