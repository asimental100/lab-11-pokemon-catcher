export function randomID() {
    let randomNum1 = Math.floor(Math.random() * 19);
    let randomNum2 = Math.floor(Math.random() * 19);
    let randomNum3 = Math.floor(Math.random() * 19);

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
        randomNum1 = Math.floor(Math.random() * 19);
        randomNum2 = Math.floor(Math.random() * 19);
        randomNum3 = Math.floor(Math.random() * 19);
    }

    return [randomNum1, randomNum2, randomNum3];
}