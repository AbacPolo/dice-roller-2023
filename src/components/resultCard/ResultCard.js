import React from "react";
import "./ResultCard.css";
import ResultBlock from "../resultBlock/ResultBlock";

function ResultCard({ diceResults }) {
  console.log("ResultCard", diceResults);

  const finalResultCalculator = (diceResults) => {
    let finalResult = 0;
    diceResults.forEach((element) => {
      if (element.value.length === 1) {
        finalResult = finalResult + element.value[0];
        console.log("finalResult", finalResult);
      } else if (element.value.length > 1) {
        if (element.adv === true) {
          finalResult += Math.max(...element.value);
          console.log("finalResult", finalResult);
        } else if (element.dis === true) {
          finalResult += Math.min(...element.value);
          console.log("finalResult", finalResult);
        } else {
          finalResult += element.value.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
          console.log("finalResult", finalResult);
        }
      }
      if (element.plus !== 0) {
        finalResult += parseInt(element.plus, 10);
      }
    });
    return finalResult;
  };

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
