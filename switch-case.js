const convertedMonth = (month) => {
    switch (month.toUpperCase()) {
        case "JANUARY":
            return 0;
            break;
        case "FEBRUARY":
            return 1;
            break;
        case "MARCH":
            return 2;
            break;
        case "APRIL":
            return 3;
            break;
        case "MAY":
            return 4;
            break;
        case "JUNE":
            return 5;
            break;
        case "JULY":
            return 6;
            break;
        case "AUGUST":
            return 7;
            break;
        case "SEPTEMBER":
            return 8;
            break;
        case "OCTOBER":
            return 9;
            break;
        case "NOVEMBER":
            return 10;
            break;
        case "DECEMBER":
            return 11;
            break; 
    }
}

export { convertedMonth };