/*
You will be provided with an initial array as the first argument to the destroyer function, 
followed by one or more arguments. Remove all elements from the initial array that are 
of the same value as these arguments.

The function must accept an indeterminate number of arguments, 
also known as a variadic function. 
You can access the additional arguments by adding a rest parameter to the function definition
or using the arguments object.
*/

function destroyer(arr) {
    let arrLength = arr.length;
  
    for(let i=1; i<arguments.length;i++){
      while(arr.indexOf(arguments[i]) >= 0){
        arr.splice(arr.indexOf(arguments[i]),1);
      }
    }
  
    return arr;
  }
  
  // Tests
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) );
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

