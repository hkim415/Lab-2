const convertMonth = (month) => {
    switch (month.toUpperCase()) {
        case 'JANUARY':
            return 0;
            break;
        case 'JAN':
            return 0;
            break;
        case '1':
            return 0;
            break;
        case 'FEBRUARY':
            return 1;
            break;
        case 'FEB':
            return 1;
            break;
        case '2':
            return 1;
            break;
        case 'MARCH':
            return 2;
            break;
        case 'MAR':
            return 2;
            break;
        case '3':
            return 2;
            break;
        case 'APRIL':
            return 3;
            break;
        case 'APR':
            return 3;
            break;
        case '4':
            return 3;
            break;
        case 'MAY':
            return 4;
            break;
        case '5':
            return 4;
            break;
        case 'JUNE':
            return 5;
            break;
        case 'JUN':
            return 5;
            break;
        case '6':
            return 5;
            break;
        case 'JULY':
            return 6;
            break;
        case 'JUL':
            return 6;
            break;
        case '7':
            return 6;
            break;
        case 'AUGUST':
            return 7;
            break;
        case 'AUG':
            return 7;
            break;
        case '8':
            return 7;
            break;
        case 'SEPTEMBER':
            return 8;
            break;
        case 'SEP':
            return 8;
            break;
        case '9':
            return 8;
            break;
        case 'OCTOBER':
            return 9;
            break;
        case 'OCT':
            return 9;
            break;
        case '10':
            return 9;
            break;
        case 'NOVEMBER':
            return 10;
            break;
        case 'NOV':
            return 10;
            break;
        case '11':
            return 10;
            break;
        case 'DECEMBER':
            return 11;
            break;
        case 'DEC':
            return 11;
            break;
        case '12':
            return 11;
            break;
    }
}

const convertCentury = (year) => {
    switch (parseInt(year.toString().substr(0, 2))) {
        case 16:
            return 6;
            break;
        case 17:
            return 4;
            break;
        case 18:
            return 2;
            break;
        case 20:
            return 6;
            break;
        case 21:
            return 4;
            break;
        default:
            return 0;
    }
}

export { convertMonth, convertCentury };