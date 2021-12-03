const toDos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("There is an error in the request", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

toDos((err, res) => {
  console.log("Callback activated");
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
console.log("Connected");
