import pkg from 'readline-sync';
import { getDayOfTheWeek, makeCalendar, months } from './lab-three.js';
import { isValidYear, isValidDate } from './validation.js';

const { question, questionInt } = pkg;

let year; 
let month;
let date;

const getInputYear = (isValid) => {
    year = questionInt('Please enter a year');
    
    while (!isValid(year)) {
        console.log('Year must be greater than 1581. Please enter again.');
        year = questionInt('Please enter a year');
    }

    return year;
}

const getInputMonth = () => {
    let inputMonth = question('Please enter a month. Ex: 1, Jan, January');

    if (isNaN(parseInt(inputMonth))) {
        month = inputMonth.charAt(0).toUpperCase() + inputMonth.slice(1);
    } else {
        month = months[(parseInt(inputMonth) -1)];
    }

    return month;
}

const getInputDate = (isValid) => {
    date = questionInt('Please enter a date');

    while (!isValid(date)) {
        console.log('Date must be less than 32 and greater than 0. Please enter again.');
        date = questionInt('Please enter a date');
    }

    return date;
}

getInputYear(isValidYear);
getInputMonth();
getInputDate(isValidDate);
makeCalendar();

console.log(month + ' ' + date + ', ' + year + ' is ' + getDayOfTheWeek(year, month, date));    