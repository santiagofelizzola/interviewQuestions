function gamingArray(arr) {
    const n = arr.length;
    let moves = 0;
    let maxElement = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
            moves++;
        }
    }

    return moves % 2 === 0 ? 'ANDY' : 'BOB';
}
