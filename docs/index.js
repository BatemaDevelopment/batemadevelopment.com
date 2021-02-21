function welcomeToSite() {
  var usersName = prompt("Enter your name!");
  var welcomeUsersName = "Welcome, " + usersName + "! ";
  document.getElementById("greetings").innerHTML += 
            welcomeUsersName + "Glad to see you are checking out my site! It means a lot to me, thanks!" + "<br>";
}
