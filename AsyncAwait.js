//Async and Await
//Async function always returns a promise
const getIp = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data;
};
getIp().then((data) => console.log(data));
