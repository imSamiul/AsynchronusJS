const toDos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Something went wrong");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

// toDos((err, res) => {
//   console.log("Callback activated");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

//toDos with promises
toDos("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => {
    console.log("Promise 1 accepted: ", data);
    return toDos("https://catfact.ninja/fact");
  })
  .then((data) => {
    console.log("Promise 2 accepted: ", data);
    return toDos("https://dog.ceo/api/breeds/image/random");
  })
  .then((data) => {
    console.log("Promise 3 accepted: ", data);
  })

  .catch((err) => {
    console.log("Promise rejected: ", err);
  });

console.log("Connected");
