export default function shuffleArray(array: any[], array2: any[]) {
    const combinedArray: any[] = array.concat(array2)
    let length = combinedArray.length;
    let indeces: number[] = [];

    for (let i = 0; i < length; i++) {
        indeces.push(i);
    }
    for (let i = length-1; i >= 0; i--) {
        const temp = combinedArray[i];
        const j = Math.floor(Math.random() * (i + 1));
        combinedArray[i] = combinedArray[j];
        combinedArray[j] = temp;
    }
    return combinedArray;
}

export function arraysEqual(a: string[], b: string[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    const sortedA: string[] = a.sort((x, y) => x.localeCompare(y))
    const sortedB: string[] = b.sort((x, y) => x.localeCompare(y))

    for (var i = 0; i < sortedA.length; ++i) {
        if (sortedA[i] !== sortedB[i]) return false;
    }
    return true;
}