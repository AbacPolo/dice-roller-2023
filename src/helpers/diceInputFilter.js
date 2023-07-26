export const diceInputFilter = (searchInput) => {
  const inputArray = searchInput.split("+");
  let objectsArray = [];
  inputArray.forEach((cell, index) => {
    if (cell.includes("d")) {
      const throwArray = cell.split("d");
      if (
        index + 1 === inputArray.length ||
        inputArray[index + 1].includes("d") === true
      ) {
        objectsArray.push({
          diceThrow: searchInput,
          quantity: throwArray[0],
          size: throwArray[1],
          plus: 0,
          adv: false,
          dis: false,
          value: null,
        });
      } else {
        objectsArray.push({
          diceThrow: searchInput,
          quantity: throwArray[0],
          size: throwArray[1],
          plus: inputArray[index + 1],
          adv: false,
          dis: false,
          value: null,
        });
      }
    }
  });
  console.log("objectsArray", objectsArray);
  return objectsArray;
};
