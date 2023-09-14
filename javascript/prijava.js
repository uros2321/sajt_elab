const loginForm = document.getElementById("logovanje"); // pristup iskucajnoj formi u htmlu
const loginButton = document.getElementById("dugme"); // pristup buttonu iz html

loginButton.addEventListener("click", (e) => { //akcija koja je na klik
    e.preventDefault(); //ako nismo uneli dobre stavke ne radi default, nema logina ako se pogresno nesto ukuca
    const username = logovanje.KorisnickoIme.value; //pristup kornickom imenu preko vrednosti
    const password = logovanje.Lozinka.value; //pristup lozniki preko vrednosti

    if (username === "dostava" && password === "dostava") {
        alert("Uspesno ste se prijavili!");
        localStorage.setItem(username,"dostava");
        localStorage.setItem(password,"dostava");
        location.href = "main.html";
       // if (window.PasswordCredential) {
         //   var c = new PasswordCredential(e.target);
           // return navigator.credentials.store(c);
          //} else {
            //return Promise.resolve(profile);
          //}
    } else {
        alert("Niste uneli ispravne podatke!");
        location.reload();
    }

});
$("#example, body").vegas({
  slides: [
      { src: "css/slike/2.jpg" },
      { src: "css/slike/yellow-background-with-chinese-food.jpg" },
      { src: "css/slike/5.jpg" }]
  });
