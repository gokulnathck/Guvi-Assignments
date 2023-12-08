var array_of_numbers = ['11', '21', '131', '420', '540', '565', '167', '148', '911'];
// Anonymous function

let palindrome_anonymous = function (numbers) {
    console.log('-Anonymous Function-')
    for (each_number of numbers) {
        let result = '';
        for (let i = each_number.length - 1; i >= 0; i--) {
            result += each_number[i];
        }
        if (each_number == result) {
            console.log(each_number)
        }
    }
}

palindrome_anonymous(array_of_numbers);

// Immediately invoked function expression
(function palindrome_anonymous_iife() {
    console.log('-IIFE Function-')
    for (each_number of array_of_numbers) {
        let result = '';
        for (let i = each_number.length - 1; i >= 0; i--) {
            result += each_number[i];
        }
        if (each_number == result) {
            console.log(each_number)
        }
    }
})();

// Arrow function
let palindrome_anonymous_arrow = (numbers) => {
    console.log('-Arrow Function-')
    for (each_number of numbers) {
        let result = '';
        for (let i = each_number.length - 1; i >= 0; i--) {
            result += each_number[i];
        }
        if (each_number == result) {
            console.log(each_number)
        }
    }
}

palindrome_anonymous_arrow(array_of_numbers);
