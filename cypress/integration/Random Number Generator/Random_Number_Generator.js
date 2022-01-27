
// class Random_Number_Generator {

export function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// }
