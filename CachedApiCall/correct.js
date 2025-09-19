function cachedApiCall(delay) {
  let cache = {};
  let lastCall = {};

  return async function (url) {
    const now = Date.now();

    if (cache[url] && now - lastCall[url] < delay) {
      console.log("Cached Value");
      return cache[url];
    }

    console.log("First call");
    const response = await fetch(url);
    const data = await response.json();

    cache[url] = data;
    lastCall[url] = now;

    return data;
  };
}

// Example usage
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
