import React from "react";
import "./ResultBlock.css";
import { criticalDetector } from "../../helpers/criticalDetector";

function ResultBlock({ individualThrow, diceResultsIndex }) {
  const className = "Dice" + individualThrow.size;

  const handlePrintStyle = (value, individualThrow) => {
    let advValue = null;
    let disValue = null;
    if (individualThrow.adv === true) {
      advValue = Math.max(...individualThrow.value);
    } else if (individualThrow.dis === true) {
      disValue = Math.min(...individualThrow.value);
    }
    if (!advValue && !disValue) {
      return <p className={criticalDetector([individualThrow]) && value === 20 ? 'criticalHit' : null}>{value}</p>;
    } else if (
      (advValue && advValue === value) ||
      (disValue && disValue === value)
    ) {
      return <p className={criticalDetector([individualThrow]) && value === 20 ? 'criticalHit' : null}>{value}</p>;
    } else if (
      (advValue && advValue !== value) ||
      (disValue && disValue !== value)
    ) {
      return <p className="Discarded">{value}</p>;
    } else {
      return;
    }
  };

  return (
    <div className="ResultBlock_Container">
      {individualThrow.value.map((value, index) =>
        index === 0 && diceResultsIndex === 0 ? (
          <div key={index} className="Dice_Container">
            <div className={`Dice ${className}`}>
              {handlePrintStyle(value, individualThrow)}
            </div>
          </div>
        ) : (
          <div key={index} className="Dice_Container">
            +
            <div className={`Dice ${className}`}>
              {handlePrintStyle(value, individualThrow)}
            </div>
          </div>
        )
      )}
      {individualThrow.plus !== 0 ? (
        <div className="Plus_Container">
          +{" "}
          <div className={`Dice`}>
            <p>{individualThrow.plus}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ResultBlock;
