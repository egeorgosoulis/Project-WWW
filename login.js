function checkCredentials() { //elegxos twn stoixeiwn tou login form
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  if (user === "admin" && pass === "admin") { //an einai ta swsta
    alert("Επιτυχής σύνδεση");
    document.querySelector('#set6').style.visibility = 'visible'; //emfanise tis upoloipes epiloges
    document.querySelector('#loginform').style.visibility = 'hidden';
    document.querySelector('#buttonlogin').style.visibility = 'hidden';

  } else {
    alert("Λάθος στοιχεία. Δοκίμασε ξανά");
  }
}
function logout() { //function gia logout otan patithei to button
  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
  alert("Έκανες αποσύνδεση");
  document.querySelector('#loginform').style.visibility = 'visible';
  document.querySelector('#buttonlogin').style.visibility = 'visible';
  document.querySelector('#set6').style.visibility = 'hidden';

}