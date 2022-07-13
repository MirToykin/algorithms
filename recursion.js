function sum(arr) {
    if (arr.length === 0) return 0;

    return arr[0] + sum(arr.slice(1));
}

function count(arr) {

}

function biggest(arr) {
    if (arr.length === 1) return arr[0];

    let biggestNumber = biggest(arr.splice(1));

    return arr[0] > biggestNumber ? arr[0] : biggestNumber;
}

console.log(biggest([2, 4, 7, 10]))