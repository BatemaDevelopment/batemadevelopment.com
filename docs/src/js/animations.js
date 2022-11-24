function hoverNavLink() {
  const hover = document
                    .querySelector('nav#navbar a:hover')
                    .id;

  document
    .getElementById(hover)
    .style
    .animation
      = 'navBarHover ease-in 500ms';

  document
    .getElementById(hover)
    .style
    .color 
      = '#c1c7ca';
}

function un_hoverNavLink() {
  const un_hover = document
                      .querySelector('nav#navbar a:not(:hover)')
                      .id;

  document
    .getElementById(un_hover)
    .style
    .animation
      = 'navBarUn_hover ease-out 500ms';

  document
    .getElementById(un_hover)
    .style
    .color 
      = '#ffffff';
}