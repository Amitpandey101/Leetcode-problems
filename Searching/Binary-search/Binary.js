//
// by normal searching

// we have to find index of value
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {

    console.log(i)

    if (val === arr[i]) {
      return i;
    }

  }
  return -1;
};

console.log(search(5,arr));

//by binary search

const binary = (val, arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    console.log("try")
    let mid = start + Math.floor((end - start) / 2);
    if (val === arr[mid]) {
      return mid;
    }
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

console.log(binary(10, arr));
