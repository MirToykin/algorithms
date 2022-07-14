function sum(arr) {
    if (arr.length === 0) return 0;

    return arr[0] + sum(arr.slice(1));
}

function count(arr) {
    if(!arr[0]) return 0;

    return 1 + count(arr.slice(1))
}

function biggest(arr) {
    if (arr.length === 1) return arr[0];

    let biggestNumber = biggest(arr.splice(1));

    return arr[0] > biggestNumber ? arr[0] : biggestNumber;
}

console.log(biggest([1, 2, 123, 4, 5, 100]));