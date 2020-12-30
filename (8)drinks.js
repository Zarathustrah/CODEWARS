// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

function getDrinkByProfession(param){
  const str = param.toLowerCase()
  switch (str) {
    case 'jabroni':
      return 'Patron Tequila',
      break
    case 'school counselor':
      return 'Anything with Alcohol'
      break
    case 'programmer':
      return 'Hipster Craft Beer'
      break
    case 'bike gang member':
      return 'Moonshine'
      break
    case 'politician':
      return 'Your tax dollars'
      break
    case 'rapper':
      return 'Cristal'
      break
    default:
      return 'Beer'
  }

}