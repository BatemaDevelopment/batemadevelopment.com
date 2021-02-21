function welcomeToSite() {
  var usersName = prompt("Enter your name!");
  document.getElementById("greetings").innerHTML += 
           "Welcome, " + usersName + "! Glad to see you are checking out my site! It means a lot to me, thanks!";
}
