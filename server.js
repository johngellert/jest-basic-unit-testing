
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

const isLeapYear = (param) => {
    if(param % 4 === 0 && param % 100!== 0 || param % 400 === 0) {
        return true;
    }
    return false;
}

const leapYear = year => {
    if(number % 400 === 0) {
        return true;
    } else if (number % 100 === 0) {
        return false;
    } else if (number % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {fizzBuzz, isLeapYear};

