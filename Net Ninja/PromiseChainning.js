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
