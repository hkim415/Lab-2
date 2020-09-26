const getDayOfTheWeek = (year, month, day) => {
    //Define local variables
    const monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    const dayOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let lastTwoDigit;
    let fitTwelves;
    let remainder;
    let fitFours;
    let sum;
    let final;

    lastTwoDigit = parseInt(year.toString().substr(-2));
    fitTwelves = Math.floor(lastTwoDigit / 12);
    remainder = lastTwoDigit % 12;
    fitFours = Math.floor(remainder / 4);

    console.log(lastTwoDigit);
    console.log(fitTwelves);
    console.log(remainder);
    console.log(fitFours);
}

getDayOfTheWeek(1992, 0,0);