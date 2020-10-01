import pkg from 'readline-sync';
import { getDayOfTheWeek, makeCalendar } from './lab-three.js';

const { question, questionInt } = pkg;

let year = questionInt('Please enter a year');
let month = question('Please enter a month');
let date = questionInt('Please enter a date');

console.log(month.charAt(0).toUpperCase() + month.slice(1) + " " + date + ", " + year + " is " + getDayOfTheWeek(year, month, date));