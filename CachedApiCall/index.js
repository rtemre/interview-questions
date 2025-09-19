// Primathon Round - 1 interview Questions

// preventDefault and stopPropogation
// Script with async , defer
// Preload , preconnect , prefetch
// Microtask queue
// Core web vitals
// Promise.all()` different from `Promise.allSettled()

// Implement a function cachedApiCall which caches the response of an api call for the duration of time which is passed to the function

// const call = cachedApiCall(1500);
// call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("1", a));
// setTimeout(() => {
//   call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("2", a));
// }, 800);
// setTimeout(() => {
//   call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("3", a));
// }, 1700);

function cachedApiCall(delay) {
  let cache = {};
  let result;
  let lastCall = 0;
  return async function (url, data) {
    let now = Date.now();

    try {
      let diff = now - lastCall;

      if (diff > delay) {
        cache[result] = null;
      }
      if (cache[result]) {
        result = cache[result];
        console.log("Cached Value");
      } else {
        const response = await fetch(url);
        const res = await response.json();
        cache[res] = res;
        result = res;
        lastCall = Date.now();
        console.log("First call");
      }

      return cache[result];
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };
}

const call = cachedApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("1", a)
);
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("2", a)
  );
}, 800);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("3", a)
  );
}, 1700);

// ⚠ Problems in Your Code

// Cache key is wrong
// cache[result] = null;
// Correct: cache by URL (and data if needed).

// Cache invalidation wrong
// if (diff > delay) {
//   cache[result] = null;
// }
// Should be delete cache[url]. Otherwise it never properly expires.
