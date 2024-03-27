import readlineSync from 'readline-sync'
// const input = 11 // <- input
// if (input % 2 == 0) {
//   // do something
//   console.log("Even")
// } else {
//   console.log("Odd")
// }
//
// const x = Number(readlineSync.question("Input your number:"))
// if (x > 100) {
//   console.log("Too large")
// } else if (x > 80) {
//   console.log("Normal")
// } else {
//   console.log("Too small")
// }

// bmi <= 17 Thin 
// bmi <= 17 - 25 Normal 
// bmi > 25 Overweight

const weight = Number(readlineSync.question("Input your weight (kg):"))
const height = Number(readlineSync.question("Input your height (m):"))
const bmi: number = weight / height ** 2;
console.log(`Weight = ${weight} Height = ${height} BMI = ${bmi}`);

if (bmi < 17) {
  console.log("Thin")
} else if (bmi >= 17 && bmi <= 25) {
  console.log("Normal")
} else if (bmi > 25) {
  console.log("Overweight")
}


