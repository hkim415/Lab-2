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
    let leapYear = 0;
    let sum;
    let final;

    lastTwoDigit = year % 100;
    fitTwelves = Math.floor(lastTwoDigit / 12);
    remainder = lastTwoDigit % 12;
    fitFours = Math.floor(remainder / 4);

    if (isLeapYear(year) && (convertedMonthCode === 0 || convertedMonthCode === 1)) {
        leapYear = 1;
    }

    sum = fitTwelves + remainder + fitFours + day + monthCode[convertedMonthCode] - leapYear + convertCentury(year);
    final = sum % 7;
    

    // console.log("lastTwoDigit", lastTwoDigit);
    // console.log("fitTwelves",fitTwelves);
    // console.log("remainder",remainder);
    // console.log("fitFours",fitFours);
    // console.log("day", day);
    // console.log("month code", monthCode[convertedMonthCode]);
    // console.log("century code", convertCentury(year));
    // console.log("leapyear", isLeapYear(year));
    // console.log("leapyearValue", leapYear);

    // console.log("sum", sum);
    console.log(dayOfTheWeek[final]);

    return dayOfTheWeek[final];
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

const makeCalendar = () => {
    
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

getDayOfTheWeek(2020, "September", 26);
// makeCalendar();