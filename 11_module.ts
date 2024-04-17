// Import / Export
// Variable (let,const)
// Function 

// export const x = 10
// import { x, add, mul, div, sub } from "./modules/math"
// console.log(x)
// console.log(add(10, 5))
// console.log(sub(10, 5))
// console.log(mul(10, 5))
// console.log(div(10, 5))

// import { fetchJsonPlaceholder } from "./modules/jsonplaceholder"
import * as jsonP from "./modules/jsonplaceholder"

// 1. Promise (.then,await)
// 2. await doSomething()
// 3. await must be called inside async function
// const main = async () => {
//   const result = await jsonP.fetchJsonPlaceholder()
//   console.log(`Result 1: ${result}`)
//   const result2 = await jsonP.fetchJsonAxios()
//   console.log(`Result 2: ${result2.data}`)
// }
//
// main()
//

import callbackFn from "./modules/callback"

callbackFn((x: string) => {
  console.log(x)
})
