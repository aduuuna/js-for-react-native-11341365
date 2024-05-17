Student ID: 11341365

Task 1

The processArray function takes an array of numbers as its argument.
It uses the map method to iterate over each element in the input array.
For each element, it checks if the number is even or odd using the modulo operator (%).
If the number is even, it squares the number (num * num).
If the number is odd, it triples the number (num * 3).
The map method returns a new array with the transformed values.

(In the example, the processArray function takes the input array [1, 2, 3, 4, 5] and returns a new array [3, 4, 9, 16, 15], where the even numbers have been squared and the odd numbers have been tripled)


Task 2

The function takes two arrays as arguments: stringArray and numberArray.
It uses the map method to iterate over each element in the stringArray.
For each string, it checks the corresponding number in the numberArray using the index parameter.
If the number is even, it capitalizes the entire string using the toUpperCase() method.
If the number is odd, it converts the string to lowercase using the toLowerCase() method.
The map method returns a new array with the modified strings.

(So in the example, the formatArrayStrings function takes the stringArray and the numberArray (processed by the processArray function) as arguments. It then modifies each string based on its corresponding number and returns a new array with the formatted strings.)

Task 3

The function takes two arguments: nameArray (the array of original names) and modifiedNameArray (the array of modified names from the previous task).
It uses the map method to iterate over each name in the nameArray.
For each name, it creates an object with three properties:
originalName: the original name from the nameArray
modifiedName: the corresponding modified name from the modifiedNameArray
id: an auto-incrementing number starting from 1
The map method returns a new array of these objects.

(But I had to import and export from the expected files and also set my type to module.js in the package.json file)


