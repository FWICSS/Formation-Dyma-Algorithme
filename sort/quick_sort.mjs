const arr = [1, 22, 7, 33, 12];

function swap(arr, i, j) {
    if (j !== i) {
        const tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
    }
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left -1;
    for (let j = left; j <= right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, left);
    return i;

}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot+1, right);
    }
}

quickSort(arr);

console.log(arr);