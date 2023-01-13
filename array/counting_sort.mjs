const arr = [7, 5, 0, 9, 2, 5];


function get_max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function counting_sort(arr) {
    if(arr.length < 2){
        return arr;
    }
    const max = get_max(arr);
    const count = new Array(max + 1);
    const sortedArray = new Array(arr.length);
    for (let i = 0; i < count.length; i++) {
        count[i] = 0;
    }
    console.log(count);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    console.log(count);
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    console.log(count);
    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        const position = count[value];
        sortedArray[position - 1] = value;
        count[value]--;
    }
    return sortedArray;
}

const sortedArray = counting_sort(arr);
console.log(sortedArray)