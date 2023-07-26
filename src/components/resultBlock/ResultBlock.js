import React from "react";
import "./ResultBlock.css";

function ResultBlock({ individualThrow, diceResultsIndex }) {
  const className = "Dice" + individualThrow.size;

  return (
    <div className="ResultBlock_Container">
      {individualThrow.value.map((element, index) =>
        index === 0 && diceResultsIndex === 0 ? (
          <div key={index} className="Dice_Container">
            <div className={`Dice ${className}`}><p>{element}</p></div>
          </div>
        ) : (
          <div key={index} className="Dice_Container">
            + <div className={`Dice ${className}`}><p>{element}</p></div>
          </div>
        )
      )}
      {individualThrow.plus !== 0 ? (
        <div className="Plus_Container">
          + <div className={`Dice`}><p>{individualThrow.plus}</p></div>
        </div>
      ) : null}
    </div>
  );
}

export default ResultBlock;
