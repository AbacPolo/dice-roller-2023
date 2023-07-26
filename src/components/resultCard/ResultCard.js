import React from "react";
import "./ResultCard.css";
import ResultBlock from "../resultBlock/ResultBlock";
import {finalResultCalculator} from "../../helpers/finalResultCalculator"

function ResultCard({ diceResults }) {

  return (
    <div className="ResultCard_Container">
      <div className="ResultCard_Wrapper">
        <h3 className="ResultCard_Title">{diceResults[0].diceThrow}</h3>
        <div className="ResultDice_Container">
          {diceResults.map((individualThrow, index) => (
            <ResultBlock
              key={index}
              diceResultsIndex={index}
              individualThrow={individualThrow}
            />
          ))}
        </div>
        <div className="Result_Box">
          <i className="fa-solid fa-equals"></i>
          <p>{diceResults && finalResultCalculator(diceResults)}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
