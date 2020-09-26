import { convertMonth, convertCentury } from './switch-case.js';

//function to get the day of a week
const getDayOfTheWeek = (year, month, day) => {
    //Define local variables
    const monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    const dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let lastTwoDigit;
    let fitTwelves;
    let remainder;
    let fitFours;
    let convertedMonthCode = convertMonth(month);
    let leapYear = 0;
    let sum;
    let final;

    //Calculation for variables
    lastTwoDigit = year % 100;
    fitTwelves = Math.floor(lastTwoDigit / 12);
    remainder = lastTwoDigit % 12;
    fitFours = Math.floor(remainder / 4);

    //Check if the month is January or February in a leap year
    if (isLeapYear(year) && (convertedMonthCode === 0 || convertedMonthCode === 1)) {
        leapYear = 1;
    }

    //Final calculation to get the day of a week
    sum = fitTwelves + remainder + fitFours + day + monthCode[convertedMonthCode] - leapYear + convertCentury(year);
    final = sum % 7;
    
    return dayOfTheWeek[final];
}

//function to check if it's a leap year
const isLeapYear = (yr) => {
    if (yr % 4 !== 0) {
        return false;
    } else if (yr % 100 !== 0) {
        return true;
    } else if (yr % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

//function to print all dates in year 2020
const makeCalendar = () => {
    //Declare local variables
    const months = ["January", 
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
                    "December"];
    const hasThirtyFirst = [true, false, true, false, true, false, true, true, false, true, false, true];
    
    //Using loop to append each dates chronologically
    for (let i = 0; i < 12; i++) {
        if (i === 1) {
            for (let j = 1; j <= 29; j++) {
                console.log(months[i] + '-' + j + '-' + "2020 is " + getDayOfTheWeek(2020, months[i], j));
            }
        } else if (hasThirtyFirst[i]) {
            for (let j = 1; j <= 31; j++) {
                console.log(months[i] + '-' + j + '-' + "2020 is " + getDayOfTheWeek(2020, months[i], j));
            }
        } else {
            for (let j = 1; j <= 30; j++) {
                console.log(months[i] + '-' + j + '-' + "2020 is " + getDayOfTheWeek(2020, months[i], j));
            }
        }
    }
}

export { getDayOfTheWeek, makeCalendar };