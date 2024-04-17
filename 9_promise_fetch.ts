let x = 1;
const zeronumber = (x: number) => {
  return new Promise((resolve, reject) => {
    const cid = setInterval(() => {
      console.log(++x)
      if (x == 5) {
        clearInterval(cid)
      }
    }, 1000)
    if (x == 0) {
      resolve(0);
    }
    else {
      reject(new Error("It's not 0!!"));
    }
  });
}

zeronumber(0)
  .then((x) => console.log(x))
  .catch((error) => console.error(error));

// console.log("=== End Program ===")

// ==== async/await eample ====
(async () => {
  const response = await zeronumber(0);
  console.log("response: ", response);
})();
