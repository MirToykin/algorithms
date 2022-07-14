function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

function selectionSort(arr) {
    console.log('input: ');
    console.log(arr);

    let newArr = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        newArr.push(arr.splice(findSmallestIndex(arr), 1)[0]);
    }

    console.log('output: ')
    console.log(newArr)
}

selectionSort([4, 1, 3, 2, 9, 7, 0, 5, 0, 10, -3, 42]);