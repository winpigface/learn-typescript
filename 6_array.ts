// const type array can change data in array

const weights = [10, 20, 30, 40]
// console.log(weights)
//
// console.log(weights[0])
// console.log(weights[1])
//
// weights[0] = 5
// console.log(weights[0])

// Add new data to array
// console.log("Before push: ", weights)
// weights.push(-5)
// console.log("After push: ", weights)

// Merge
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = []
// spread operator
const arr4 = [...arr1, ...arr2]
// Bad Merge
// for (let i = 0; i < arr1.length; i++) {
//   arr3.push(arr1[i])
// }
// for (let i = 0; i < arr2.length; i++) {
//   arr3.push(arr2[i])
// }
// console.log(arr3)

// Bad map (es6)
const arr5 = []
for (let i = 0; i < arr1.length; i++) {
  arr5.push(arr1[i] * arr2[i])
}
console.log(arr5)

// Good map
const arr6 = arr1.map((item) => {
  return item * item
})
const arr7 = arr1.map(item => item * item)
console.log(arr6)
console.log(arr7)
