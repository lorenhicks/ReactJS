class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(studentToRegister) {
    const studentSearch = this.students.filter(
      (student) => student.email === studentToRegister.email
    );
    if (studentSearch.length > 0) {
      console.log("Student is in system.");
      return;
    }
    this.students.push(studentToRegister);
    console.log("Student has been added to system.");
  }
}
const nicole = new Student("Nicole", "nicole@spectrum.com", "Harvard");
const charles = new Student("Charles", "nicole@spectrum.com", "Brown");
const loren = new Student("Loren", "loren@spectrum.com", "Yale");
const steven = new Student("Steven", "steven@spectrum.com", "Columbia");
const react = new Bootcamp("React", 500000000);
console.log(nicole, react);
react.registerStudent(nicole);
react.registerStudent(nicole);
react.registerStudent(charles);
react.registerStudent(loren);
