function togglePassword() {
  var x = document.getElementById("inputPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function toggleSignUpPassword() {
  var x = document.getElementById("signUpPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
