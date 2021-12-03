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
console.log("1");
console.log(2);
toDos((err, res) => {
  console.log("Callback activated");
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
console.log(3);
console.log(4);
console.log("Connected");
