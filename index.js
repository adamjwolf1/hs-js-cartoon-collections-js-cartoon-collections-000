function dwarfRollCall(dwarves) {
  var list = [];
  for (let i = 0; i < dwarves.length; i++) {
    list.push(`${i + 1}. ${dwarves[i]}`);
  }
  return `${list.join(' ')} `;
}

function summonCaptainPlanet(planeteerCalls) {
	return planeteerCalls.map(function(ele) {
		return ele.toUpperCase() + "!";
	});
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4){
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  var cheese = "cheddar, gouda, camembert";
  for(let i = 0; i < foods.length; i++) {
    var cheeseIdx = cheese.indexOf(foods[i]); 
      if (cheeseIdx !== -1) {
         return foods[i];
      } 
    }
   
   return "no cheese!"
}
  
  

