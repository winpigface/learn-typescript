// areaTriangle(8,4); // hosing
// areaTriangle2(8,4);
// areaTriangle3(8,4);

// traditional function
function areaTriangle(side: number, height: 4 | 5) {
  let area = 0.5 * side * height
  console.log(`area = ${area}`)
}

// anonymus function
const areaTriangle2 = function(side: number, height: number) {
  let area = 0.5 * side * height
  console.log(`area = ${area}`)
}

// arrow function
const areaTriangle3 = (side: number, height: number) => {
  let area = 0.5 * side * height
  console.log(`area = ${area}`)
}

areaTriangle(8, 4)

const foo = {
  name: "Natthatpat",
  area: areaTriangle3,
}
foo.area(3, 4)

const products = [
  { id: 1, name: "food", price: 23 },
  { id: 28, name: "food", price: 23 },
  { id: 33, name: "food", price: 23 },
  { id: 4, name: "food", price: 23 },
]

// for (let key in products)
//   console.log(products[key])
// products.map((item) => console.log(item))

products.push({ id: 5, name: "food", price: 53 })
products.map((item) => console.log(item))

// adding item with spread operator
const newProducts = [...products, { id: 6, name: "Food", price: 80 }]
products.map((item) => console.log(item))

const newProducts2 = products.filter((item) => (item.id !== 73))
newProducts2.map((item) => console.log(item))
