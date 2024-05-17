// Task 1

function processArray(arr) {
  return arr.map((num) => {
    if (num % 2 === 0) {
      return num * num;
    } else {
      return num * 3;
    }
  });
}

const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);

// Task 2

export function formatArrayStrings(stringArray, numberArray) {
  return stringArray.map((str, index) => {
    if (numberArray[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

const stringArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const numberArray = processArray([1, 2, 3, 4, 5]);
const formattedStrings = formatArrayStrings(stringArray, numberArray);
console.log(formattedStrings);
