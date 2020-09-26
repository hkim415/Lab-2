const getDayOfTheWeek = (year, month, day) => {
    //Define local variables
    const monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    const dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let lastTwoDigit;
    let fitTwelves;
    let remainder;
    let fitFours;
    let convertedMonth;
    let sum;
    let final;

    lastTwoDigit = parseInt(year.toString().substr(-2));
    fitTwelves = Math.floor(lastTwoDigit / 12);
    remainder = lastTwoDigit % 12;
    fitFours = Math.floor(remainder / 4);

    switch (month.toUpperCase()) {
        case "JANUARY":
            convertedMonth = 0;
            break;
        case "FEBRUARY":
            convertedMonth = 1;
            break;
        case "MARCH":
            convertedMonth = 2;
            break;
        case "APRIL":
            convertedMonth = 3;
            break;
        case "MAY":
            convertedMonth = 4;
            break;
        case "JUNE":
            convertedMonth = 5;
            break;
        case "JULY":
            convertedMonth = 6;
            break;
        case "AUGUST":
            convertedMonth = 7;
            break;
        case "SEPTEMBER":
            convertedMonth = 8;
            break;
        case "OCTOBER":
            convertedMonth = 9;
            break;
        case "NOVEMBER":
            convertedMonth = 10;
            break;
        case "DECEMBER":
            convertedMonth = 11;
            break; 
    }

    sum = fitTwelves + remainder + fitFours + day + monthCode[convertedMonth];

    console.log(lastTwoDigit);
    console.log(fitTwelves);
    console.log(remainder);
    console.log(fitFours);
    console.log(convertedMonth);
    console.log(sum);
}

getDayOfTheWeek(1993, "FEBrUary", 12);