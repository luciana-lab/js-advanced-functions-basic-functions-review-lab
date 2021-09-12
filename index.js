// Your code here

// defines saturdayFun FUNCTION DECLARATION as specified
// 1) function exists
// 2) uses the default activity 'roller-skate' when no arguments are passed
// 3) permits the default activity to be overriden
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};
saturdayFun() // 'This Saturday, I want to roller-skate!'
saturdayFun('dance')  // 'This Saturday, I want to dance!'

// defines mondayWork FUNCTION EXPRESSION as specified
// 1) function exists
// 2) uses the default activity 'go to the office' when no arguments are passed
// 3) permits the default activity to be overriden
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};
mondayWork();
mondayWork('work from home');

// defines wrapAdjective function according to the specification
// 1) function exists
// 2) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
// 3) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
function wrapAdjective(whatever = "*") {
    return function (adjective = "special") {
        return `You are ${whatever}${adjective}${whatever}!`
    }
}
wrapAdjective("||")("awesome");

// defines an object called Calculator
// 1) has a JavaScript Object called Calculator as a local variable
// const Calculator = {};

// that has a function called add
// 1) Calculator.add exists
// 2) calculates 1 + 3

// that has a function called subtract
// 1) Calculator.subtract exists
// 2) calculates 1 - 3

// that has a function called multiply
// 1) Calculator.multiply exists
// 2) calculates 1 * 3

// that has a function called divide
// 1) Calculator.divide exists
// 2) calculates 10 / 5
const Calculator = {
    add(n1, n2) {
        return n1 + n2
    },

    subtract(n1, n2) {
        return n1 - n2
    },

    multiply(n1, n2) {
        return n1 * n2
    },

    divide(n1, n2) {
        return n1 / n2
    }
};
Calculator.add(1, 3);
Calculator.subtract(1, 3);
Calculator.multiply(1, 3);
Calculator.divide(10, 5);

// COULDN'T RESOLVE IT BY MYSELF. USED THE SOLUTION. DIDN'T UNDERSTAND WHAT IT'S ASKING FOR.
// Defines a function called actionApplyer
// 1) exists
// receives two arguments: a starting integer and an array of functions
// 2) returns the given starting point, unchanged, when the array is empty
// 3) Given 13, returns 4 after being acted on by several functions
function actionApplyer(integer, array) {
    // let a = integer
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer)
    };
    return integer
};
