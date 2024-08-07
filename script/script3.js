let pets = []; //pets array
console.log("First Line");

function Pet(name, age, gender, breed) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
}

function Register() {
  let inputName = document.getElementById("txtName").value;
  let inputAge = document.getElementById("txtAge").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputBreed = document.getElementById("txtBreed").value;

  let newPet = new Pet(inputName, inputAge, inputGender, inputBreed);

  pets.push(newPet);
  console.log(pets);
}

function init() {
  let pet1 = new Pet("Scooby", 10, "Male", "Husky");
  let pet2 = new Pet("Scrappy", 9, "Male", "Mixed");

  console.log(pet1, pet2);
}

window.onload = init;

console.log("Last Line");
