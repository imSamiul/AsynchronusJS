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
//better way to to like below
toDosPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
