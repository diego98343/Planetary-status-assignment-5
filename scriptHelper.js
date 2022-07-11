let pilotname = document.forms[0];
let copilotname= document.forms[0];
let fuellevels = document.forms[0];
let cargomass = document.forms[0];

let  planetDisplay= document.getElementById("missionTarget");
let display = document.getElementById("faultyItems");
let colorchange= document.getElementById("launchStatus");
let form =document.forms[0];
let list = display.innerHTML += `<ol> 
                                  <li>${pilotname[0].value}<li>
                                  <li>${copilotname[1].value}</li>
                                  <li>${fuellevels[2].value}</li>
                                  <li>${cargomass[3].value} kg</li>
                               </ol>`;
 

function validateInput(testInput) {

    if ( pilotname[0].value===""){
        display.style.visibility="hidden"
        window.confirm(" input is empty. Please try again");
        return null

    } else if (isNaN(pilotname[0].value)=== false ){
        window.confirm(" You entered a number input in pilot name. Please try again");
        display.style.visibility="hidden"
        return null

    } else if (copilotname[1].value===""){
        display.style.visibility="hidden"
        window.confirm(" input is empty. Please try again");
        return null

    } else if (isNaN(copilotname[1].value)=== false ){
        window.confirm(" You entered a number input in copilot name. Please try again");
        display.style.visibility="hidden"
        return null

    } else if (fuellevels[2].value=== ""){
        display.style.visibility="hidden"
        window.confirm(" input is empty. Please try again");
        return null

    } else if(isNaN(fuellevels[2].value)=== true) {
        window.confirm(" You entered a letter input in the wrong spot. Please try again");
        display.style.visibility="hidden"
        return null ;

    } else if(cargomass[3].value=== ""){
        display.style.visibility="hidden"
        window.confirm(" input is empty Please try again");
        return null;

    } else if (isNaN(cargomass[3].value)=== true){
        window.confirm(" You entered a letter input in the wrong spot Please try again");
        display.style.visibility="hidden"
        return null ;

    } else if ( fuellevels[2].value<10000){
        window.confirm("Fuel level too LOW Fill tank");
        display.style.visibility="hidden"
        colorchange.innerHTML=" SHUTTLE NOT READY TO LAUNCH"
        colorchange.style.color="red"
        return null ;

    } else if (cargomass[3].value>50000){
        window.confirm("Ship is too HEAVY!! Please unload");
        display.style.visibility="hidden"
        colorchange.innerHTML=" SHUTTLE NOT READY TO LAUNCH"
        colorchange.style.color="red"
        return null ;
    }
    
    
    
    else {
        colorchange.innerHTML=" READY TO LAUNCH"
        colorchange.style.color="green"
        display.style.visibility="visible"
        return display.innerHTML= `<ul>
                                     <li> Pilot Name: ${pilotname[0].value}<li>
                                     <li> Copilot Name: ${copilotname[1].value}</li>
                                     <li> Fuel Level: ${fuellevels[2].value} L</li>
                                     <li> Ship weight: ${cargomass[3].value} kg</li>
                                </ul> `;
    }
    
};



  let url ='https://handlers.education.launchcode.org/static/planets.json'

  async function myFetch() {
    let planetsReturned;
    
    planetsReturned = await fetch(url).then( function(response) {
      response.json().then(function(json){

       let planet = json[Math.floor(Math.random()*6)];
      
       console.log(planet.name)
       console.log(planet.image);
       console.log(planet.moons);
       console.log(planet.star);
       console.log(planet.distance);
      
       return planetDisplay.innerHTML= `<ul>
                             <li> NAME: ${planet.name}<li>
                             <li> DIAMETER: ${planet.diameter}<li>
                             <li> Distance: ${planet.distance}</li>
                             <li> Number of stars: ${planet.star}</li>
                             <li> Number of moons: ${planet.moons}</li>
                             <img class="avatar" src=${planet.image}>
                           </ul> `;

      })
    });

}


form.addEventListener("submit", function(e) {
    e.preventDefault();  

    validateInput(list);
   
  });


window.addEventListener("load", function() {
 
    myFetch()

 });


