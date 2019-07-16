
const fizzBuzz = (param) => {
    if(param % 3 === 0 && param % 5 === 0) {
        return "FizzBuzz";
    }
    else if(param % 3 === 0) {
        return "Fizz";
    }
    else if (param % 5 === 0) {
        return "Buzz";
    }
    return param;
}

module.exports = fizzBuzz;