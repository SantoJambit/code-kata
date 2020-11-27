export function countJewels(stones: string, jewels: string) {
    return stones.split('').filter((x) => jewels.includes(x)).length;
}
export function isHappyNumber(start: number) {
    const found: number[] = [];
    let i = start;
    while (true) {
        if (i === 1) return true;
        const next = i
            .toString()
            .split('')
            .reduce((acc, s) => acc + parseInt(s, 10) ** 2, 0);
        if (found.includes(next)) return false;
        found.push(next);
        i = next;
    }
}

export function isHappyNumberRecursive(i: number, found: number[] = []) {
    if (i === 1) return true;
    const next = i
        .toString()
        .split('')
        .reduce((acc, s) => acc + parseInt(s, 10) ** 2, 0);
    if (found.includes(next)) return false;
    found.push(next);
    return isHappyNumberRecursive(next, found);
}

export function isHappyNumberRecursiveSet(i: number, found: Set<number> = new Set()) {
    if (i === 1) return true;
    const next = i
        .toString()
        .split('')
        .reduce((acc, s) => acc + parseInt(s, 10) ** 2, 0);
    if (found.has(next)) return false;
    found.add(next);
    return isHappyNumberRecursiveSet(next, found);
}

export function getHappyNumbers(count: number) {
    const numbers: number[] = [];
    for (let i = 0; numbers.length < count; i++) {
        if (isHappyNumberRecursive(i)) numbers.push(i);
    }
    return numbers;
}
