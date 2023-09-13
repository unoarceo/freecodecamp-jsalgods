/* Compare two arrays and return a new array 
with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    const arr1diff = arr1.filter(x => arr2.indexOf(x)<0);
    const arr2diff = arr2.filter(x => arr1.indexOf(x)<0);
  
    return arr1diff.concat(arr2diff);
  }

// Tests
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));