var array_of_numbers_1 = [1, 2, 3, 4, 5]
var array_of_numbers_2 = [6, 7, 8, 9, 10, 11]
// Anonymous function

let median_anonymous = function (numbers_1, numbers_2) {
    console.log('-Anonymous Function-')
    if (numbers_1.length != numbers_2.length) {
        console.log('Median cannot be found as length mismatch');
        return ''
    }
    let collection = numbers_1.concat(numbers_2)
    collection.sort((a, b) => a - b)
    let median;
    if (collection.length % 2 === 0) {
        let index = (collection.length / 2) - 1;
        median = (collection[index] + collection[index + 1]) / 2
    }
    else {
        median = collection[Math.floor(collection.length / 2)]
    }
    console.log('Median: ' + median)
}

median_anonymous(array_of_numbers_1, array_of_numbers_2);

// Immediately invoked function expression
(function palindrome_anonymous_iife() {
    console.log('-IIFE Function-')
    if (array_of_numbers_1.length != array_of_numbers_2.length) {
        console.log('Median cannot be found as length mismatch');
        return ''
    }
    let collection = array_of_numbers_1.concat(array_of_numbers_2)
    collection.sort((a, b) => a - b)
    let median;
    if (collection.length % 2 === 0) {
        let index = (collection.length / 2) - 1;
        median = (collection[index] + collection[index + 1]) / 2
    }
    else {
        median = collection[Math.floor(collection.length / 2)]
    }
    console.log('Median: ' + median)
})();

