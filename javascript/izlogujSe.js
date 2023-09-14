//const logoutForm = document.getElementById("logout")
const logoutButton = document.getElementById("dugme1");

logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  let text;
  if (confirm("Da li zelite da se izlogujete") == true) {
    text = "Uspesno ste se izlogovali";
    location.href = "Prijava.html";
  } else {
    text = "Otkazano!";
  }
});
