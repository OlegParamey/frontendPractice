function solve(a, b) {
    let counter = 0;

    for (let i = a; i < b; i++) {
        let str = i.toString();
        let count8 = 0, count5 = 0, count3 = 0;
        let isValid = true;

        for (let char of str) {
            if (char === '8') {
                count8++;
            } else if (char === '5') {
                count5++;
            } else if (char === '3') {
                count3++;
            } else {
                isValid = false;
                break;
            }
        }

        if (isValid && count8 >= count5 && count5 >= count3) {
            counter++;
        }
    }

    return counter;
}

// Example usage
console.log(solve(0, 1000)); // Expected output: 14


console.log(solve(0, 100))