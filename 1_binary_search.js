const prompt = require('prompt');
const list = [1, 3, 5, 7, 8, 10, 12, 13];

const binarySearch = (item) => {

    let min = 0;
    let max = list.length - 1;

    while (min <= max) {
        let mid = Math.floor((max + min)/2);

        if (list[mid] === item) {
            return mid;
        } else if (list[mid] > item) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return 'not found';
}

console.log('Initial list: ', list);

prompt.start();

prompt.get(['item'], (err, result) => {
    if (err) {
        return onError(err);
    }

    console.log(`Index of ${result.item}: ${binarySearch(result.item)}`);
});

const onError = (err) => {
    console.error(err);
    return 1;
}