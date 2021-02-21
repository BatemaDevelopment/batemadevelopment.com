function welcomeToSite() {
  var usersName = prompt("Enter your name!");
  document.getElementById("greetings").innerHTML += 
           "Welcome, " + usersName + ", glad to see you are checking out my site!" + "<br>";
}
