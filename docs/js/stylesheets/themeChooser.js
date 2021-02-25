function themeSelection {
  var darkTheme = "rel=\"stylesheet\n type=\"text/css\" href=\"/css3/stylesheets/darktheme.css\"";
  var lightTheme = "rel=\"stylesheet\n type=\"text/css\" href=\"/css3/stylesheets/lighttheme.css\"";
  var currentTheme = darkTheme;
  
  var dark = "dark";
  var light = "light";
  var capsDark = "Dark";
  var capsLight = "Light";
  var fullCapsDark = "DARK";
  var fullCapsLight = "LIGHT";
  
  var askTheme = prompt("Type light for the light theme and dark for the dark theme");
  
  if (askTheme === dark || askTheme === capsDark || askTheme === fullCapsDark) {
    document.getElementById("themeChosen").innerText += darkTheme;
  } else if (askTheme === light || askTheme === capsLight || askTheme === fullCapsLight) {
    document.getElementById("themeChosen").innerText += lightTheme;
  } else {
    alert("Please try again. You typed " + askTheme + ". Use that to check for errors. We only allow the words, light and dark. We only accept three combinations of the character type of each word. For example, light in all lowercase (light), light with the first letter capitalized (Light), and light with all letters capitalized (LIGHT). These rules also apply for the word, \"dark\". Thanks!")
  }
}
