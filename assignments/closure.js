// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let a = 5; 
const multiplyNum = function(num) {
  return function(num2) {
    return num * num2;
  }
}

const multiplyByFive = multiplyNum(5);
let total = multiplyByFive(7);
console.log(total);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let number = 0;
  const increment = function() {
   return number += 1;
  }
  return increment;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let number = 0;
    const counter = {
      increment: function() {
        return number += 1;
      }, 
      decrement: function() {
        return number -= 1;
      }
    };

    return counter;
};

const count = counterFactory();
console.log(count.decrement());
console.log(count.decrement());
console.log(count.increment());


