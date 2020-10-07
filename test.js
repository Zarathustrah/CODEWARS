https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(pontoonDistance > sharkDistance && youSpeed < sharkSpeed && dolphin === true || dolphin === false) {
    return "Shark Bait!"
  } else {
    return "Alive!"
  }
  }