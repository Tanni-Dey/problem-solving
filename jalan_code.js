

function shiftedElementArray(arr, p, d) {
    const N = arr.length;
    let first = [];
    let last = [];
    if (p > N || p < 0) {
        return ('Please give any postion number', 0, 'to', N);
    } else {
        if (d === 0) {
            first = arr.slice(0, p);
            last = arr.slice(p, N);
            arr = [...last, ...first]
            return arr;

        } else if (d === 1) {
            first = arr.slice(0, N - p);
            last = arr.slice(N - p, N);
            arr = [...last, ...first]
            return arr;
        } else {
            return ('Please give any direction number');
        }
    }
}
const inputArray = [1, 3, 2, 7, 4, 6];
const postion = 2;
const direction = 1;
shiftedElementArray(inputArray, postion, direction);

