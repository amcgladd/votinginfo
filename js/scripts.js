$(document).ready(function() {
  var age = parseInt(prompt("What is your age?"));

  if(age >= 18) {
    $("#adultContent").show();
  } else {
    $("#childContent").show();
  }
});
