array_of_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let odd_numbers = function (numbers) {
    for (each_number in numbers){
        if (each_number % 2 !== 0) {
            console.log(each_number)
        }
    }
}

odd_numbers(array_of_numbers)

