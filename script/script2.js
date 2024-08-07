let person = {
  name: "Fernanda",
  age: 22,
};

console.log(`The name is ${person.name} and the age is ${person.age}`);

/* Class Objects */

let student1 = {
  name: "Nick",
  email: "nick@test.com",
  grade: 3.12,
};

let student2 = {
  name: "Juan",
  email: "juan@test.com",
  grade: 3.25,
};

let student3 = {
  name: "Emilio",
  email: "emilio@test.com",
  grade: 2.25,
};

/* Print students average grade */

let average = (student1.average + student2.average + student3.average) / 3;
console.log(average);

/* Array of objects */

let students = [student1, student2, student3];

/*print all the names of the students in the array */
console.log(students[0].name);

/* CHallenge */
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
];

const booksContainer = document.getElementById("htmlbooks");

for (let i = 0; i < 3; i++) {
  // console.log();
  const bookDiv = document.createElement("div");
  bookDiv.textContent = `Book: ${books[i].title}, Year of publication: ${books[i].year}`;
  booksContainer.appendChild(bookDiv);
}
