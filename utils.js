export function randomID() {
    let randomNum = Math.ceil(Math.random * 19);

    return randomNum;
}

export function findById(arrayName, idName) {
    for (let i = 0; i < arrayName.length; i++) {
        const item = arrayName[i];

        if (item.id === idName) {
            return item;
        }
    }
    return null;
}