let data: any = { x: "xxx" }
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
// .then((json) => console.log(json));
// console.log(res);


