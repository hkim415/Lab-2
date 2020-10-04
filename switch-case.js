const convertMonth = (month) => {
    switch (month.toUpperCase()) {
        case 'JANUARY':
        case 'JAN':
        case '1':
            return 0;
            break;
        case 'FEBRUARY':
        case 'FEB':
        case '2':
            return 1;
            break;
        case 'MARCH':
        case 'MAR':
        case '3':
            return 2;
            break;
        case 'APRIL':
        case 'APR':
        case '4':
            return 3;
            break;
        case 'MAY':
        case '5':
            return 4;
            break;
        case 'JUNE':
        case 'JUN':
        case '6':
            return 5;
            break;
        case 'JULY':
        case 'JUL':
        case '7':
            return 6;
            break;
        case 'AUGUST':
        case 'AUG':
        case '8':
            return 7;
            break;
        case 'SEPTEMBER':
        case 'SEP':
        case '9':
            return 8;
            break;
        case 'OCTOBER':
        case 'OCT':
        case '10':
            return 9;
            break;
        case 'NOVEMBER':
        case 'NOV':
        case '11':
            return 10;
            break;
        case 'DECEMBER':
        case 'DEC':
        case '12':
            return 11;
            break;
    }
}

const convertCentury = (year) => {
    switch (parseInt(year.toString().substr(0, 2))) {
        case 16:
        case 20:
            return 6;
            break;
        case 17:
        case 21:
            return 4;
            break;
        case 18:
            return 2;
            break;
        default:
            return 0;
    }
}

export { convertMonth, convertCentury };