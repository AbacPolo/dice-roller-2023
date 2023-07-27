export const criticalDetector = (diceResults) => {
    console.log('diceResults',diceResults);
  let criticalHit = false;
  diceResults.forEach((diceSize) => {
    console.log('diceSize',diceSize);
    console.log('diceSize.size',diceSize.size);
    if (diceSize.size === '20') {
        console.log('diceSize.value',diceSize.value);
      diceSize.value.forEach((value) => {
        console.log('value',value);
        if (value === 20) {
          criticalHit = true;
        }
      });
    }
  });
  return criticalHit;
};
