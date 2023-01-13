const arr = [3, 6, 5, 2, 10, 1];

function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const value = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }
}
function get_max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function get_min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function bucket_sort(arr) {
    const max = get_max(arr), min = get_min(arr);
    const n = arr.length;
    const buckets = new Array(n);
    const range = (max - min) / n;
    const sortedArray = new Array(n);

    //initialize buckets
    console.log("Initialise buckets")
    for (let i = 0; i < n; i++) {
        buckets[i] = [];
    }
    console.log(buckets);

    // geting interval buckets
    console.log("interval buckets")
    for (let i = 0; i < n; i++) {
        const value = arr[i];
        let k = 0;
        while (min + range * (k + 1) < value) {
            k++;

        }
        buckets[k].push(value);
    }
    console.log(buckets);

    //sorted interval buckets
    console.log("sorted interval buckets")
    for (let i = 0; i < n; i++) {
        insertion_sort(buckets[i])
    }
    console.log(buckets)


    // sorted Array buckets
    console.log("sorted Array with buckets")
    let count = 0;
    for (let i = 0; i < n; i++){
        for (let j=0; j < buckets[i].length; j++) {
            sortedArray[count] = buckets[i][j];
            count++;
        }
    }
    return sortedArray;
}

const sortedArray = bucket_sort(arr);
console.log(sortedArray);