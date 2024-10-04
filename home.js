let logout = document.getElementById("logout");
let authToken = localStorage.getItem("authToken");
console.log(authToken);
if (authToken) {
  let logout = document.getElementById("logout");
  console.log(logout);
  logout.style.display = "block";
  document.getElementById("log").style.color = "white";
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "none";
}
function logout_data() {
  console.log("hi");
  localStorage.removeItem("authToken");
  window.location.reload = "home.html";
}
