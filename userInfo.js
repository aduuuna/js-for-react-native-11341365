import { formatArrayStrings } from "./arrayManipulation.js";

function createUserProfiles(nameArray, modifiedNameArray) {
  return nameArray.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNameArray[index],
      id: index + 1,
    };
  });
}

const stringArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const numberArray = [1, 2, 3, 4, 5];
const modifiedNameArray = formatArrayStrings(stringArray, numberArray);
const userProfiles = createUserProfiles(stringArray, modifiedNameArray);
console.log(userProfiles);
