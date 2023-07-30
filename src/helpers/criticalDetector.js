export const criticalDetector = (diceResults) => {
  let criticalHit = false;
  diceResults.forEach((diceSize) => {
    if (diceSize.size === '20') {
      diceSize.value.forEach((value) => {
        if (value === 20) {
          criticalHit = true;
        }
      });
    }
  });
  return criticalHit;
};
