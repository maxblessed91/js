// 1. Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function countFactorial(number) {
    let result = number === 0 ? 1 : number * countFactorial(number - 1);
    return result;
}
console.log(countFactorial(5));
console.log(countFactorial(8));
