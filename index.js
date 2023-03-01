function scuberGreetingForFeet(someNumber) {

  if (someNumber <= 400){
          return "This one is on me!";
  }
  else if (someNumber > 400 && someNumber < 2000){
    return "That will be twenty bucks.";
  }
  else if (someNumber > 2000 && someNumber < 2500){
      return "I will gladly take your thirty bucks.";
  }
  else if(someNumber > 2500){
      return "No can do.";
  }

}

function ternaryCheckCity(city) {

  if (city === "NYC") {
      return "Ok, sounds good.";
  }
  else{
      return "No go.";
  }
}



function switchOnCharmFromTip(tip) {

  let tipResponse = '' 

    switch(tip) {
      case 'generous': 
        tipResponse = "Thank you so much."
        break;
      case 'not as generous':
        tipResponse = "Thank you."
        break;
      default:
        tipResponse = "Bye."
    }
    return tipResponse
}