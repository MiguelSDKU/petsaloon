// Constructor
class Service {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

let services = [
  new Service("Grooming", 40.0),
  new Service("Nail Trimming", 15.0),
  new Service("Teeth Cleaning", 25.0),
];

//Registration

function register() {
  const title = $("#serviceTitle").val().trim();
  const price = $("#servicePrice").val().trim();

  if (title === "" || price === "") {
    displayNotification("Please fill in all fields.", "danger");
    if (title === "") {
      $(".titleValidationMsg").css("color", "red").css("display", "block");
    }

    if (price === "") {
      $(".descriptionValidationMsg")
        .css("color", "red")
        .css("display", "block");
    }
    return;
  }

  const newService = new Service(title, parseFloat(price));
  services.push(newService);

  displayNotification("Service registered successfully!", "success");

  $("#serviceTitle").val("");
  $("#servicePrice").val("");

  console.log(services);
  save(newService);
}

function displayNotification(message, type) {
  const notification = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  $("#notification").html(notification);
}

// function isvalidService(validTitle, validPrice) {
//   let validTitle = true;
//   let validPrice = true;

//   if ((Service.title = "")) {
//     validTitle = false;
//     $(".titleValidationMsg").css("color", "red".show());
//   }
// }

function init() {
  // Hook events
  $("#btnRegister").on("click", register);
  console.log(services);
  $(".titleValidationMsg").hide();
  $(".descriptionValidationMsg").hide();
}

$(document).ready(init);
