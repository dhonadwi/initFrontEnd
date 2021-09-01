import 'regenerator-runtime';
import '../styles/materialize.min.css';
import '../styles/styles.css';
import './materialize.min.js';


document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.sidenav');
  //const instances = 
  M.Sidenav.init(elems);
});
console.log('init file FrontEnd')