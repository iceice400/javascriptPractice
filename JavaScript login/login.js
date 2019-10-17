let attempt = 3;
function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "Admin" && password == "DefaultPassword") {
    alert("Login Successfully");
    window.location = "success.html";
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt;");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
