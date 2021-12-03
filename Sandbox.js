const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.status === 400) {
    console.log("There was an error");
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
console.log("Connected");
