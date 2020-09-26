import pkg from 'readline-sync';
import { getDayOfTheWeek, makeCalendar } from './lab-three.js';
const { question } = pkg;

let year = parseInt(question('Please enter a year'));
let month = question('Please enter a month');
let date = parseInt(question('Please enter a date'));

getDayOfTheWeek(year, month, date);