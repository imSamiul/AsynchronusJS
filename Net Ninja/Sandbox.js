//Call API with Async Await fucntion
const toDos = async () => {
  //async function that always returns a promise
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data;
};
toDos().then((data) => console.log(data));
//Call Api with XML request

// const toDos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Something went wrong");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };

// toDos("https://jsonplaceholder.typicode.com/todoss")
//   .then((data) => {
//     console.log("Promised Activated : ", data);
//   })
//   .catch((error) => {
//     console.log("Promised Error : ", error);
//   });

console.log("Connected");
