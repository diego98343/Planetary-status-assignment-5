import { validateInput } from './scriptHelper';
import { myFetch } from './scriptHelper';



form.addEventListener("submit", function(e) {
  e.preventDefault();  

  validateInput(list);
 
});


window.addEventListener("load", function() {

  myFetch()

});


