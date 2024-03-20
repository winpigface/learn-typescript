// var , let , const
let x = 1;
x = 5;
x = 10;
// x = "string";
console.log(x);

let y: number;
y = 5;
console.log(y);

const z = 10;
console.log(z);
const message: string = "Hello World";
console.log(message);

// Example : Weight
const weight1 = 70;
const weight2 = 60;
console.log("Sum of weight is " + (weight1 + weight2));
console.log("Sum of weight is " + (weight1 - weight2));

// Question 1: BMI
const weight: number = 60; // kg
const height: number = 1.6; //m
const bmi: number = weight / height ** 2;
console.log(`Weight = ${weight} Height = ${height} BMI = ${bmi}`);

// Question 2: Celcius to Farenheit
const celcius: number = 100;
const farenheit: number = celcius * (9 / 5) + 32;
console.log(`From ${celcius} celcius to ${farenheit} Farenheit`);
