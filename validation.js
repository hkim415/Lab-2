let isValidYear = (year) => {
    //Leap year rule was introduced in 1582
    if(year < 1582) {
        return false;
    }

    return true;
}

let isValidDate = (date) => {
    if(date > 31 || date < 1) {
        return false;
    }

    return true;
}

export { isValidYear, isValidDate };