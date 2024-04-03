// const person = {
//   name: "Win",
//   surname: "ww",
//   age: 12,
// }
// type PersonType = {
//   name: string,
//   surname: string,
//   age: number,
// }
// let person2: PersonType;
// person2 = {
//   name: "Win",
//   surname: "ww",
//   age: 12,
// }
// console.log("===========")
// console.log(person)
// console.log(person.name)
//
// person.name = "John"
// console.log(person.name)
//
// // assign 2 objects in to array
// const persons = [person, person2]
// console.log(persons)

// print person using loop
// for (let i = 0; i < persons.length; i++) {
//   console.log(persons[i].name, persons[i].surname, persons[i].age)
// }
// for (let item in persons) {
//   console.log(persons[item])
// }
type T = "de" | "dbiz" | "computing";
type StudentType = Record<T, {
  name: string,
  age?: number,
}>

const students = {
  de: {
    name: "John",
    age: 20,
  },
  dbiz: {
    name: "Jack",
    age: 22,
  },
  computing: {
    name: "Jim",
    age: 25,
  }
}
students.computing = {
  name: "win",
  age: 12,
}
console.log(students)
console.log(students.computing.name)
