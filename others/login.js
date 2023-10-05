// Signin
const lemailref = document.getElementById("lemailinput");
const lpasswordref = document.getElementById("lpasswordinput");
const signin = () => {
  const lemailref = document.getElementById("lemailinput");
  const lpasswordref = document.getElementById("lpasswordinput");
  // console.log("signin check");
  if (lemailref.value == "") {
    alert("Please enter Email");
  } else if (lpasswordref.value == "") {
    alert("Please enter Password");
  }
  // else if (passwordref.length < 6 || passwordref.length > 6) {
  //   alert("Password min and max length is 6.");}
  else {
    const checkemail = users.find(
      (user) =>
        user.email === lemailref.value && user.password === lpasswordref.value
    );
    console.log("start");
    if (!checkemail) {
      console.log("if");
      alert("Please SignUp");
    } else {
      if (checkemail.email.includes("admin")) {
        location.replace("/admin/home.html");
      } else {
        location.replace("/home.html");
      }
    }
  }
};
lemailref.addEventListener("keyup", () => {
  if (lemailref.value !== "") {
    lemailref.classList.replace("is-invalid", "border-info");
  } else {
    lemailref.classList.replace("border-info", "is-invalid");
  }
});
lpasswordref.addEventListener("keyup", () => {
  if (lpasswordref.value !== "") {
    lpasswordref.classList.replace("is-invalid", "border-info");
  } else {
    lpasswordref.classList.replace("border-info", "is-invalid");
  }
});
