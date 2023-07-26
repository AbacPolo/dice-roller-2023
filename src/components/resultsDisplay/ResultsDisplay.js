import React from "react";
import "./ResultsDisplay.css";
import { useSelector } from "react-redux";
import {
  getDiceResults,
  getResultsHstory,
} from "../../features/controlPanel/controlPanelSlice";
import ResultCard from "../resultCard/ResultCard";

function ResultsDisplay() {
  const diceResults = useSelector(getDiceResults);
  const resultsHstory = useSelector(getResultsHstory);
  return (
    <div className="ResultsDisplay_Container">
      <div className="ResultsDisplay_Wrapper">
        {diceResults.length > 0 && <ResultCard diceResults={diceResults} />}
        {resultsHstory.map((prevResults, index) => (
          <ResultCard key={index} diceResults={prevResults} />
        ))}
      </div>
    </div>
  );
}

export default ResultsDisplay;