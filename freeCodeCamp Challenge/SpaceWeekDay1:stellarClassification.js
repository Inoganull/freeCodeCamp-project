function classification(temp) {
    if (tem >= 30000) {
        return "O";
    }
    else if (temp >= 10000) {
        return "B";
    }
    else if (temp >= 7500) {
        return "A";
    }
    else if (temp >= 6000) {
        return "F";
    }
    else if (temp >= 5200) {
        return "G";
    }
    else if (temp >= 3700) {
        return "K";
    }
    else {
        return "M";
    }

    return temp;
}

console.log(classification(5778));
console.log(classification(2400));
console.log(classification(9999));
console.log(classification(3700));
console.log(classification(3699));
console.log(classification(210000));
console.log(classification(6000));
console.log(classification(11432));