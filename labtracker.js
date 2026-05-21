class LabResult {
  constructor(patientName, test, value, minNormal, maxNormal) {
    this.patientName = patientName;
    this.test = test;
    this.value = value;
    this.minNormal = minNormal;
    this.maxNormal = maxNormal;
  }

  checkResult() {
    if (this.value < this.minNormal) {
      return `${this.patientName} → ${this.test}: ${this.value} ⬇️ LOW`;
    } else if (this.value > this.maxNormal) {
      return `${this.patientName} → ${this.test}: ${this.value} ⬆️ HIGH`;
    } else {
      return `${this.patientName} → ${this.test}: ${this.value} ✅ NORMAL`;
    }
  }
}

const results = [
  new LabResult("Cynthia", "Blood Glucose", 5.2, 3.9, 6.1),
  new LabResult("Amara", "Blood Glucose", 8.5, 3.9, 6.1),
  new LabResult("John", "Blood Glucose", 3.1, 3.9, 6.1),
  new LabResult("Tunde", "Haemoglobin", 14.5, 13.5, 17.5),
  new LabResult("Ngozi", "Haemoglobin", 10.2, 13.5, 17.5),
];

console.log("=== LAB RESULT TRACKER ===");
results.forEach((result) => {
  console.log(result.checkResult());
});