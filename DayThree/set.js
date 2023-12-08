var array_of_numbers = [1, 2, 1, 2, 3]
// Anonymous function

let unique_anonymous = function (numbers) {
    console.log('-Anonymous Function-')
    console.log('Numbers: ' + [...new Set(numbers)])
}

unique_anonymous(array_of_numbers);

// Immediately invoked function expression
(function palindrome_anonymous_iife() {
    console.log('-IIFE Function-')
    console.log('Numbers: ' + [...new Set(array_of_numbers)])
})();

