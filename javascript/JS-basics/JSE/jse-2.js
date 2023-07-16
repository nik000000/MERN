// Q1 Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

function greet(name){
    console.log(`Hi ${name}!! How are you doing?`);
}


// Q2 Write a function called 'getSquare' that takes a number parameter and returns its square.
function getSquare(number){
    return number * number;
}

// Q3 Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.
function countLetters(string){
    const counts = {};
    for(const element of string){
        if(counts[element]){
            counts[element]++;
        }else{
            counts[element] = 1;
        }
    }
    return counts;
}

// Q4 Write a function called 'createCounter' that returns a function. The returned function should increment a
// counter variable each time it is called and return the current count.
function createCounter(){
    let count = 0;

    function counter(){
        count++;
        return count;
    }

    return counter;
}

// let func = createCounter();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

// Q5 Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.
function sumEvenNumbers(arr){
    let sum = 0;
    for(let item of arr){
        if(item % 2 == 0){
            sum += item;
        }
    }

    return sum;
}

// console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9]));


// Q6 Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
function sumNumbers(arr){
    let sum = 0;
    for(let item of arr){
        sum += item;
    }

    return sum;
}

// Q7 Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.
function stringsWithLengthGreaterThanFive(strings){
    let finalStrings = [];
    for(const string of strings){
        if(string.length > 5){
            finalStrings.push(string);
        }
    }

    return finalStrings;
}

// console.log(stringsWithLengthGreaterThanFive(["safdsfsdf", "sadfdsg", "asdgfdsfgds", "asd", "cdf"]));

// Q8 Write a function that takes an object and returns an array of all the keys in the object.
function getKeyesFromObject(person){
    return Object.keys(person);
}


let person = {
    name: 'John',
    age: 34
};
console.log(getKeyesFromObject(person));


// Q9 Write a function that takes an array of objects and returns an array of all the values of a specified property name.
function getPropertyValues(arr, propName) {
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);

    return values;
}
  
  // Test cases
  const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
  ];
  
//   console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
//   console.log(getPropertyValues(people, "age")); //  [20, 21, 21]
//   console.log(getPropertyValues(people, "gender")); // ["male", "female", "male"]
//   console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]


// Q10 Write a function that takes an array of objects and returns the object with the highest value for a specified property name.
function findMaxByProperty(arr, prop) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];
  
    // Loop through the array starting at second object
    for (let i = 1; i < arr.length; i++) {
      // Check if the current object's property value is greater than maxObj's property value
      if (arr[i][prop] > maxObj[prop]) {
        // If yes, update maxObj to current object
        maxObj = arr[i];
      }
    }
  
    // Return the object with highest value for the specified property
    return maxObj;
  }
  
  // Test case 1
  const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ];
  const maxObj1 = findMaxByProperty(arr1, "price");
  console.log(maxObj1); // { name: 'orange', price: 3 }
  
  // Test case 2
  const arr2 = [
    { name: "Pranay", age: 20 },
    { name: "Nidhi", age: 21 },
    { name: "Soumya", age: 21 },
  ];
  const maxObj2 = findMaxByProperty(arr2, "age");
  console.log(maxObj2); // { name: 'Nidhi', age: 21 }
  
  // Test case 3
  const arr3 = [];
  const maxObj3 = findMaxByProperty(arr3, "price");
  console.log(maxObj3); // null