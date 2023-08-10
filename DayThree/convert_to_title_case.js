var array_of_names = ['ramesh', 'suresh', 'rajesh'];
// Anonymous function
let convert_to_title_case_anonymous = function (names) {
    console.log('-Anonymous Function-')
    for (each_name of names){
        console.log(
            each_name.slice(0,1).toUpperCase() + each_name.slice(1, each_name.length).toLowerCase()
        )
    }
}

convert_to_title_case_anonymous(array_of_names);

// Immediately invoked function expression
(function convert_to_title_case_iife() {
    console.log('-IIFE Function-')
    for (each_name of array_of_names){
        console.log(
            each_name.slice(0,1).toUpperCase() + each_name.slice(1, each_name.length).toLowerCase()
        )
    }
})();

// Arrow function
let convert_to_title_case_arrow = (names) => {
    console.log('-Arrow Function-')
    for (each_name of names){
        console.log(
            each_name.slice(0,1).toUpperCase() + each_name.slice(1, each_name.length).toLowerCase()
        )
    }
}

convert_to_title_case_arrow(array_of_names);
