//------------------------------------------------

//  1. Write a JavaScript program to display the current day and time in the following format.s
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let currentTime = new Date();
let currentDay = currentTime.getDay();
let currentMinutes = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();
let currentHour = currentTime.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
});

function getDayNameByDayNumber(day) {
    const days = new Array(
        "",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    );

    return days[day];
}

console.log(
    "Today is: " +
        getDayNameByDayNumber(currentDay) +
        "\n" +
        "Current Time: " +
        currentHour +
        " : " +
        currentMinutes +
        " : " +
        currentSeconds
);

//------------------------------------------------

// 2. Write a JavaScript program to print the contents of the current window.

function printWindowContent() {
    window.print();
}

//------------------------------------------------

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let currentDate = currentTime.getDate();
let currentMonth = currentTime.getMonth();
let currentYear = currentTime.getFullYear();

function getMonthNameByMonthNumber(month) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return months[month];
}

console.log(
    "Date is: " +
        currentDate +
        "/" +
        getMonthNameByMonthNumber(currentMonth) +
        "/" +
        currentYear
);

//------------------------------------------------

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let side1 = 5;
let side2 = 6;
let side3 = 7;

let perimeter = (side1 + side2 + side3) / 2;

let area = Math.sqrt(
    perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3)
);

console.log(+area.toFixed(3));

//------------------------------------------------

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(isLeapYear(804));

//------------------------------------------------

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

for (let year = 2014; year < 2051; year++) {
    let date = new Date(year, 0, 1); // new Date(year, month, day)
    if (date.getDay() === 0) console.log(`1st January is Sunday in ${year}`);
}

//------------------------------------------------

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

function guessNumber(number) {
    let randomNumber = Math.ceil(Math.random() * 10);
    console.log(randomNumber);
    let result = number === randomNumber ? "Good Work" : "Not matched";
    console.log(result);
}

guessNumber(1);

//------------------------------------------------

// 9. Write a JavaScript program to calculate days left until next Christmas.

let todayDate = new Date();
let christmasDate = new Date("Jan 7, 2022, 00:00:00");

let totalSeconds = Math.abs(christmasDate - todayDate) / 1000;

let totalDaysLeft = Math.floor(totalSeconds / (60 * 60 * 24));

console.log(`${totalDaysLeft} days left until Christmas`);

//------------------------------------------------

// 10. Write a JavaScript program to calculate multiplication and division of two numbers

function multiply(number1, number2) {
    let multiplyResult = number1 * number2;
    return multiplyResult;
}

function divide(number1, number2) {
    let divideResult = number1 / number2;
    return divideResult;
}

console.log(multiply(12, 10), divide(12, 10));

//------------------------------------------------

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function convertToF(c) {
    let cCurrent = c;
    let result = (cCurrent * 9) / 5 + 32;
    console.log(cCurrent + " °C " + "is " + result + " °F");
}

function convertToC(f) {
    let fCurrent = f;
    let result = Math.floor(((fCurrent - 32) * 5) / 9);
    console.log(fCurrent + " °C " + "is " + result + " °C");
}

convertToF(60);
convertToC(45);

//------------------------------------------------

// 12. Write a JavaScript program to get the website URL (loading page).

console.log(`The website URL is: \n${document.URL}`);

//------------------------------------------------

// 13. Write a JavaScript exercise to create a variable using a user-defined name.

let variable = "some text";
let userDefinedName = "other text";
this[variable] = userDefinedName;
console.log(this[variable]);

//------------------------------------------------

// 14. Write a JavaScript exercise to get the extension of a filename.

let filename1 = "index.html";
let filename2 = "app.js";

function getFileExtension(filename) {
    return filename.split(".").pop();
}

console.log(getFileExtension(filename1));
console.log(getFileExtension(filename2));

//------------------------------------------------

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function getTheDifference(number) {
    if (number <= 13) return 13 - number;
    else return (number - 13) * 2;
}
console.log(getTheDifference(58));
console.log(getTheDifference(8));

//------------------------------------------------

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sumIntegers(number1, number2) {
    if (number1 === number2) return (number1 + number2) * 3;
    else return number1 + number2;
}
console.log(sumIntegers(3, 7));
console.log(sumIntegers(3, 3));

//------------------------------------------------

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function differenceBetweenNumbers(number) {
    let result = number <= 19 ? 19 - number : (number - 19) * 3;
    return result;
}

console.log(differenceBetweenNumbers(19));
console.log(differenceBetweenNumbers(8));
console.log(differenceBetweenNumbers(23));

//------------------------------------------------

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkNumbers(number1, number2) {
    return number1 === 50 || number2 === 50 || number1 + number2 === 50;
}
console.log(checkNumbers(50, 1));
console.log(checkNumbers(1, 50));
console.log(checkNumbers(30, 7));
console.log(checkNumbers(5, 45));

//------------------------------------------------

// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function checkPositiveOrNegative(number1, number2) {
    return (number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0);
}
console.log(checkPositiveOrNegative(1, 1));
console.log(checkPositiveOrNegative(-1, -1));
console.log(checkPositiveOrNegative(-1, 1));
console.log(checkPositiveOrNegative(1, -1));
