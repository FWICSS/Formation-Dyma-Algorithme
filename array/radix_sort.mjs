const arr = [7, 5522, 15, 9, 500, 5];

function get_max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function counted_sort(arr, position) {
    const base = 10;
    const count = new Array(base);
    const sortedArray = new Array(arr.length);
    //initialize the array to be sorted
    for (let i = 0; i < base; i++) {
        count[i] = 0;
    }
    //Get the number to compare
    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / position) % base]++;
    }
    // cumulates the array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    // sorted the array
    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        const positionInCount = count[Math.floor(value / position) % base]
        sortedArray[positionInCount -1 ] = value;
        count[Math.floor(value / position)%base]--
    }
    return sortedArray;
}

function radix_sort(arr) {
    if (arr.length<2){
        return arr;
    }
    const max = get_max(arr);
    for (let i = 1; (max / i > 1); i *= 10) {
        arr = counted_sort(arr, i);
    }
    return arr;

}

const sortedArray = radix_sort(arr);
console.log(sortedArray);
console.log(radix_sort([2]));