//Fetch api
fetch("https://api.nationalize.io?name=nathaniel")
  .then((res) => {
    console.log("Resolve: ", res);
    return res.json();
  })
  .then((data) => {
    console.log("Data: ", data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
//Fetch api chainnigng
// fetch("https://api.nationalize.io?name=nathaniel")
//   .then((res) => {
//     console.log("Resolve: ", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data: ", data);
//     return fetch("https://dog.ceo/api/breeds/image/random");
//   })
//   .then((res) => {
//     console.log("Resolve 2: ", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data 2: ", data);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });
