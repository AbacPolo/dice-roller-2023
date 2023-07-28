export const diceInputFilter = (searchInput) => {
  let objectsArray = [];

  if (!parseInt(searchInput[0], 10)) {
    return 'error';
  } 

  const regExp = /([a-z]|[A-Z])/;
  const testString = searchInput.replaceAll('+',"").replaceAll('adv',"").replaceAll('dis',"").replaceAll('d',"");
  if (regExp.test(testString)) {
    return 'error';
  }

  const inputArray = searchInput.split("+");
  console.log('inputArray',inputArray);
  inputArray.forEach((cell, index) => {
    if (cell.includes("d")) {
      const adventage = cell.includes("adv") ? true : false;
      const disadventage = cell.includes("dis") ? true : false;
      const throwArray = cell
        .replaceAll("adv", "")
        .replaceAll("dis", "")
        .split("d");
      console.log('throwArray',throwArray);
      if(throwArray[1] === '' || throwArray.length > 2) {
        return 'error';
      }
      let plus;
      if (inputArray[index + 1] !== undefined) {
        plus = inputArray[index + 1].includes("d") ? 0 : inputArray[index + 1];
      } else {
        plus = 0;
      }
      objectsArray.push({
        diceThrow: searchInput,
        quantity: throwArray[0],
        size: throwArray[1],
        plus: parseInt(plus, 10),
        adv: adventage,
        dis: disadventage,
        value: null,
      });
    }
  });
  
  console.log('objectsArray',objectsArray);
  return objectsArray;
};
