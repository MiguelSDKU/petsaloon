// script3.js
let pets = [];

function Pet(name, age, gender, breed, color) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.color = color;
}

function isValid(pet) {
  let validation = true;
  let inputName = document.getElementById("txtName");
  let inputAge = document.getElementById("txtAge");
  let inputGender = document.getElementById("txtGender");
  let inputBreed = document.getElementById("txtBreed");
  let inputColor = document.getElementById("txtColor");

  inputName.classList.remove("error");

  if (pet.name == "") {
    validation = false;
    inputName.classList.add("error");
  } else if (pet.age == "") {
    validation = false;
    inputAge.classList.add("error");
  } else if (pet.gender == "") {
    validation = false;
    inputGender.classList.add("error");
  } else if (pet.breed == "") {
    validation = false;
    inputBreed.classList.add("error");
  } else if (pet.color == "") {
    validation = false;
    inputColor.classList.add("error");
  }

  return validation;
}

function Register() {
  let inputName = document.getElementById("txtName").value;
  let inputAge = document.getElementById("txtAge").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputBreed = document.getElementById("txtBreed").value;
  let inputColor = document.getElementById("txtColor").value;

  let newPet = new Pet(
    inputName,
    inputAge,
    inputGender,
    inputBreed,
    inputColor
  );

  if (isValid(newPet) == true) {
    pets.push(newPet);
    displayRow();
  }
}

function deletePet(id) {
  console.log("deleting " + id);
  pets.splice(id, 1);
  document.getElementById(id).remove();
  console.log(pets);
  displayRow();
}

function init() {
  let pet1 = new Pet("Scooby", 10, "Male", "Husky", "White");
  let pet2 = new Pet("Scrappy", 9, "Male", "Mixed", "Brown");
  let pet3 = new Pet("Princess", 2, "Female", "Pitbull", "Black");
  pets.push(pet1, pet2, pet3);
  displayRow();
}

window.onload = init;
