import React from "react";
import "./InformationDisplay.css";

function InformationDisplay() {
  return (
    <div className="InformationDisplay_Container">
      <div className="InformationDisplay_Wrapper">
        <h2>How to use DICE ROLLER</h2>
        <section className="InformationDisplay_Section">
            <h3>Valid Throws examples:</h3>
            <ul>
                <li><b>1d20</b> <i>(One dice)</i></li>
                <li><b>1d20+1d4</b> <i>(Multiple dice of different sizes)</i></li>
                <li><b>2d20</b> <i>(Multiple dice of the same size)</i></li>
                <li><b>1d20+5</b> <i>(One or more dice + Modifier)</i></li>
                <li><b>2d20adv</b> <i>(Multiple dice of the same size with adventage)</i></li>
                <li><b>2d20dis</b> <i>(Multiple dice of the same size with disadventage)</i></li>
                <li><i>& combinations of all the options above</i></li>
            </ul>
        </section>
      </div>
    </div>
  );
}

export default InformationDisplay;