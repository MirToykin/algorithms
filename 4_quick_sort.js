function quickSort(arr) {
    if (arr.length < 2) return arr;

    if (arr.length === 2) return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;

    const base = arr[0];
    const lower = arr.slice(1).filter(el => el <= base);
    const higher = arr.slice(1).filter(el => el > base);

    return [...quickSort(lower), base, ...quickSort(higher)];
}

console.log(quickSort([4, 3, 7, 0, 10, 1, 2, 8]));