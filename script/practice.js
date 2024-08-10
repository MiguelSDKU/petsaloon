// JS vs jQuery //

// document.getElementById("results");
// $("#results");

// document.getElementsByTagName("p");
// $("p");

// document.getElementsByClassName("text");
// $(".text")

function clickMe() {
  $("#results").text("The button was clicked!");
  //hide the first paragraph
  $("p:first").hide();
  $("p:last").css("background-color", "red");
}

function clickOption1() {
  $("#op1Link").addClass("btn");
  $("#op2Link").removeClass("btn");
  $("#options1").show();
  $("#options2").hide();
}

function clickOption2() {
  $("#op2Link").addClass("btn");
  $("#op1Link").removeClass("btn");
  $("#options2").show();
  $("#options1").hide();
}

function register() {
  event.preventDefault();
  let userName = $("#txtName").val();
  $("#results").append(`  
    <li>${userName} </li>
  `);
}

function init() {
  $("#btnRegister").on("click", register);
  $("#btn1").on("click", clickMe);
  $("#options1").hide();
  $("#options2").hide();

  //hook events

  $("#btn1").on("mouseover", function () {
    $(this).addClass("btn");
  });
  $("#btn1").on("mouseleave", function () {
    $(this).removeClass("btn");
  });
}

window.onload = init;
