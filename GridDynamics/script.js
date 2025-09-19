/************************************************************
 * Question 1: setTimeout in loop (closure issue with `var`)
 ************************************************************/

// Using var (wrong: all logs "6")
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Q1 with var:", i);
  }, 1000);
}

// Using let (correct: logs 1–5)
for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log("Q1 with let:", i), 1000);
}

/************************************************************
 * Question 2: Hoisting with variable & function
 ************************************************************/

console.log("Q2 first log:", a);
var a = 2;
function a() {}
console.log("Q2 second log:", a);

// Output:
// Q2 first log: ƒ a() {}   (function hoisted before var)
// Q2 second log: 2

/************************************************************
 * Question 3: typeof function vs variable
 ************************************************************/

console.log("Q3 typeof foo:", typeof foo); // "function"
console.log("Q3 typeof bar:", typeof bar); // "undefined"

function foo() {
  return "hello";
}

var bar = function () {
  return "world";
};

/************************************************************
 * Question 4: Promise & Event Loop
 ************************************************************/

Promise.resolve()
  .then(() => {
    console.log("Q4 log:", 1);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Q4 log:", 2);
        resolve();
      }, 0);
    });
  })
  .then(() => {
    console.log("Q4 log:", 3);
  });

console.log("Q4 log:", 4);

// Output order:
// Q4 log: 4   (synchronous)
// Q4 log: 1   (microtask)
// Q4 log: 3   (microtask after promise resolution)
// Q4 log: 2   (macrotask setTimeout)

/************************************************************
 * Question 5: Constructor function mistake (fixed version)
 ************************************************************/

// ❌ Wrong: cannot define getAge like a method inside constructor
// function Person(name) {
//   this.name = name;
//   getAge(age) {
//     return age;
//   }
// }

// ✅ Correct way
function Person(name) {
  this.name = name;
}

Person.prototype.getAge = function (age) {
  return age;
};

const p = new Person("Raman");
console.log("Q5 getAge:", p.getAge(25)); // 25

/************************************************************
 * Question 6: Flatten nested arrays (Recursion)
 ************************************************************/

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("Q6 flatten:", flatten([1, [2, 4, [7, 8]], 5]));
// Output: [1, 2, 4, 7, 8, 5]
