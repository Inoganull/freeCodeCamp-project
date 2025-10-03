function toBinary(decimal) {
    if (decimal === 0) {
        return "0";
    }

    let binaryString = "";
    let currentNumber = decimal;

    while (currentNumber > 0) {
        const remainder = currentNumber % 2;
        binaryString = remainder + binaryString;
        currentNumber = Math.floor(currentNumber / 2);
    }

    return binaryString;
}

  // --- Examples ---
    console.log(`The binary of 5 is: ${toBinary(5)}`);
    console.log(`The binary of 0 is: ${toBinary(0)}`);
    console.log(`The binary of 12 is: ${toBinary(12)}`);
    console.log(`The binary of 50 is: ${toBinary(50)}`);
    console.log(`The binary of 99 is: ${toBinary(99)}`); 
