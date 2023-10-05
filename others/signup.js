// signup
const nameref = document.getElementById("nameinput");
const emailref = document.getElementById("emailinput");
const passwordref = document.getElementById("passwordinput");
const cpasswordref = document.getElementById("cpasswordinput");
const signup = () => {
  const nameref = document.getElementById("nameinput");
  const emailref = document.getElementById("emailinput");
  const passwordref = document.getElementById("passwordinput");
  const cpasswordref = document.getElementById("cpasswordinput");
  if (nameref.value == "") {
    alert("Please enter name");
  } else if (emailref == "") {
    alert("Please enter user email");
  } else if (!emailref.value.includes("@")) {
    alert("Invalid email");
  } else if (passwordref == "") {
    alert("Please enter Password");
  } else if (passwordref.value.length < 6) {
    alert("Password minimum length is 6");
  } else if (passwordref.value.length > 12) {
    alert("Password max length is 12");
  } else if (cpasswordref == "") {
    alert("Enter Confirm Password");
  } else if (passwordref.value !== cpasswordref.value) {
    alert("Password not Matched");
  } else if (passwordref.value == cpasswordref.value) {
    location.replace("/login.html");
  }
};
nameref.addEventListener("keyup", () => {
  if (nameref.value !== "") {
    nameref.classList.replace("is-invalid", "border-info");
  } else {
    nameref.classList.replace("border-info", "is-invalid");
  }
});

emailref.addEventListener("keyup", () => {
  if (emailref.value !== "") {
    emailref.classList.replace("is-invalid", "border-info");
  } else {
    emailref.classList.replace("border-info", "is-invalid");
  }
});
passwordref.addEventListener("keyup", () => {
  if (passwordref.value !== "") {
    passwordref.classList.replace("is-invalid", "border-info");
  } else {
    passwordref.classList.replace("border-info", "is-invalid");
  }
});

cpasswordref.addEventListener("keyup", () => {
  if (cpasswordref.value !== "") {
    cpasswordref.classList.replace("is-invalid", "border-info");
  } else {
    cpasswordref.classList.replace("border-info", "is-invalid");
  }
});
