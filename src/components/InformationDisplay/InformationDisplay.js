import React from "react";
import "./InformationDisplay.css";

function InformationDisplay() {
  return (
    <div className="InformationDisplay_Container">
      <div className="InformationDisplay_Wrapper">
        <h3>How to use DICE THROWER</h3>
        <section>
            <h4>Valid Throws examples:</h4>
            <ul>
                <li><b>1d20+5</b> (Dice + Modifier)</li>
                <li><b>1d20+1d4</b> (Dice + Dice)</li>
                <li><b>2d20</b> (Multiple Dice)</li>
                <li><b>2d20adv</b> (Multiple Dice with adventage)</li>
                <li><b>2d20dis</b> (Multiple Dice with disadventage)</li>
                <li>& combinations of all the options above</li>
            </ul>
        </section>
      </div>
    </div>
  );
}

export default InformationDisplay;