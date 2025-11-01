function verify(message, key, signature) {
    const calculateValue = (str) => {
        //splite string into characters and calculate the value
        return str.split('').reduce((accumulator, char) => {

        const charCode = char.charCodeAt(0);
        let charValue = 0;

        //lowercase check(a-z -> 1-26)
        if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
            charValue = charCode - 'a'.charCodeAt(0) + 1;
        }
        //uppercase check(A-Z -> 27-52)
        else if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
            charValue = charCode - 'A'.charCodeAt(0) + 27;
        }
        return accumulator + charValue;
    },0);//starting accumulator value is 0
    };
    //calculate the signature value
    const computedSignature = calculateValue(message) + calculateValue(key);

    //return the result of comparison
    return computedSignature === signature;
}


console.log(verify("foo", "bar", 57));
console.log(verify("foo", "bar", 54));