const func1 = () => {
  console.log("I am function 1");
};
const func2 = () => {
  console.log("I am function 2");
};
let ver1 = 1;
const func3 = new Promise((res, rej) => {
  if (ver1 === 1) {
    res();
  } else {
    rej();
  }
  //   anyFunction();
});
// func2(func1);
func3.then(func1).catch(func2);
