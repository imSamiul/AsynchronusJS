const toDos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("There is an error in the request", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

// toDos((err, res) => {
//   console.log("Callback activated");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

//Promise Example
const toDosPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve("Promise activated");
    reject("Promise rejected");
  });
};

toDosPromise().then((res) => {
  console.log(res);
}),
  (err) => {
    console.log(err);
  };
toDosPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Connected");
