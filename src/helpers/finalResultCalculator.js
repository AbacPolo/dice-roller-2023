export const finalResultCalculator = (diceResults) => {
  let finalResult = 0;
  diceResults.forEach((element) => {
    if (element.value.length === 1) {
      finalResult = finalResult + element.value[0];
    } else if (element.value.length > 1) {
      if (element.adv === true) {
        finalResult += Math.max(...element.value);
      } else if (element.dis === true) {
        finalResult += Math.min(...element.value);
      } else {
        finalResult += element.value.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
      }
    }
    if (element.plus !== 0) {
      finalResult += element.plus;
    }
  });
  return finalResult;
};
