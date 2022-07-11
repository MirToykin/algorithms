const prompt = require('prompt');
const list = [1, 3, 5, 7, 8, 10, 12, 13];

const binarySearch = (item) => {
    item = +item;

    let min = 0;
    let max = list.length - 1;

    while (min <= max) {
        let mid = min === max ? min : Math.floor((max - min)/2);
        console.log(item, min, max, mid);

        if (list[mid] === item) {
            return mid;
        } else if (list[mid] > item) {
            max = mid - 1;
        } else if (list[mid] < item) {
            min = mid + 1;
        } else {
            return 'not found';
        }
    }
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