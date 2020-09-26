import { convertMonth, convertCentury } from './switch-case.js';

const getDayOfTheWeek = (year, month, day) => {
    //Define local variables
    const monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    const dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let lastTwoDigit;
    let fitTwelves;
    let remainder;
    let fitFours;
    let convertedMonthCode = convertMonth(month);
    let leapYear;
    let sum;
    let final;

    lastTwoDigit = parseInt(year.toString().substr(-2));
    fitTwelves = Math.floor(lastTwoDigit / 12);
    remainder = lastTwoDigit % 12;
    fitFours = Math.floor(remainder / 4);

    // if (isLeapYear(year))

    sum = fitTwelves + remainder + fitFours + day + monthCode[convertedMonthCode] + convertCentury(year);
    final = sum % 7;
    

    console.log("lastTwoDigit", lastTwoDigit);
    console.log("fitTwelves",fitTwelves);
    console.log("remainder",remainder);
    console.log("fitFours",fitFours);
    console.log("day", day);
    console.log("month code", monthCode[convertedMonthCode]);
    console.log("century code", convertCentury(year));
    console.log("leapyear", isLeapYear(year));

    console.log("sum", sum);
    console.log(dayOfTheWeek[final]);
}

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

getDayOfTheWeek(1992, "september", 12);