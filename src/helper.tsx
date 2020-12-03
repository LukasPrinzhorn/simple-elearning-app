export default function shuffleArray(array: any[], array2: any[]) {
    const combinedArray = array.concat(array2)
    return [...combinedArray].sort(() => Math.random() - 0.5);
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