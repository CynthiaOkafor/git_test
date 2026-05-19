class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  getResult() {
    if (this.score >= 70) {
      return `${this.name} → PASSED with ${this.score}%`;
    } else {
      return `${this.name} → FAILED with ${this.score}%`;
    }
  }
}

const students = [
  new Student("Cynthia", 85),
  new Student("Amara", 45),
  new Student("John", 72),
  new Student("Tunde", 60),
  new Student("Ngozi", 91),
];

console.log("=== GRADE CHECKER RESULTS ===");
students.forEach((student) => {
  console.log(student.getResult());
});

let passed = 0;
let failed = 0;

students.forEach((student) => {
  if (student.score >= 70) {
    passed++;
  } else {
    failed++;
  }
});

console.log("=============================");
console.log(`Total Students: ${students.length}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Pass Rate: ${(passed / students.length) * 100}%`);