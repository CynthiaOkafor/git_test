//const myName = "Cynthia";
//const myJob = "Medical Lboratory Scientist";
//let currentlyLearning = "JavaScript";

//console.log(myName);
//console.log(myJob);
//console.log(currentlyLearning);

//const age = 22;
//const isLearning = true;
//const skills = ["HTML", "CSS", "JavaScript"];
//const person = {
    //name: "Cynthia",
    //age: 22,
    //isStudent: true
//};

//console.log(age);
//console.log(isLearning);
//console.log(skills);
//console.log(person);

// const skills = ["HTML", "CSS", "JavaScript"];
// const person = {name: "Cynthia", age: 22};

// console.log(skills[0]);
// console.log(skills[2]);
// console.log(person.name);
// console.log(person.age);

// function greet(name) {
//   console.log("Hello " + name + "!");
// }

// function add(a, b) {
//   console.log(a + b);
// }

// greet("Cynthia");
// greet("Odin");
// add(5, 10);
// add(100, 200);

// const score = 50;

// if (score >= 70) {
//   console.log("You passed!");
// } else {
//   console.log("You failed!");
// }

// const temperature = 25;

// if (temperature > 30) {
//   console.log("It is hot outside!");
// } else if (temperature > 20) {
//   console.log("It is warm outside!");
// } else {
//   console.log("It is cold outside!");
// }

// Loop through numbers
// for (let i = 1; i <= 5; i++) {
//   console.log("Number: " + i);
// }

// // Loop through an array
// const skills = ["HTML", "CSS", "JavaScript", "Git"];

// for (let i = 0; i < skills.length; i++) {
//   console.log("I know: " + skills[i]);
// }


// const students = [
//   { name: "Cynthia", score: 85 },
//   { name: "John", score: 45 },
//   { name: "Amara", score: 72 },
// ];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].score >= 70) {
//     console.log(students[i].name + " passed!");
//   } else {
//     console.log(students[i].name + " failed!");
//   }
// }

// const name = "Cynthia";
// const level = 500;
// const course = "Medical Laboratory Science";
// const school = "University of Lagos";
// const skills = ["HTML", "CSS", "JavaScript"];

// console.log(`My name is ${name}`);
// console.log(`I am a ${level}L student of ${course} at ${school}`);
// console.log(`I know ${skills.length} programming skills so far`);
// console.log(`My first skill is ${skills[0]}`);
// console.log(`${2 + 2} is the result of 2 + 2`);

// // Regular function
// function add(a, b) {
//   return a + b;
// }

// // Same function as arrow function
// const addArrow = (a, b) => a + b;

// console.log(add(5, 10));
// console.log(addArrow(5, 10));

// // Arrow function with template literals
// const introduce = (name, course) => {
//   console.log(`Hi I am ${name} and I study ${course}`);
// }

// introduce("Cynthia", "Medical Laboratory Science");


class Hospital {
  constructor(name, location, specialty) {
    this.name = name;
    this.location = location;
    this.specialty = specialty;
  }

  describe() {
    console.log(`${this.name} is located in ${this.location} and specialises in ${this.specialty}`);
  }
}

const hospital1 = new Hospital("LUTH", "Lagos", "General Medicine");
const hospital2 = new Hospital("UCH", "Ibadan", "Cardiology");

hospital1.describe();
hospital2.describe();
