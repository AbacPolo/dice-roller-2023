import React from "react";
import "./InformationDisplay.css";

function InformationDisplay() {
  return (
    <div className="InformationDisplay_Container">
      <div className="InformationDisplay_Wrapper">
        <h3>How to use DICE THROWER</h3>
        <section className="InformationDisplay_Section">
            <h4>Valid Throws examples:</h4>
            <ul>
                <li><b>1d20</b> (One dice)</li>
                <li><b>1d20+1d4</b> (Multiple dice with different sizes)</li>
                <li><b>2d20</b> (Multiple dice with the same size)</li>
                <li><b>1d20+5</b> (One or more dice + Modifier)</li>
                <li><b>2d20adv</b> (Multiple dice with the same size with adventage)</li>
                <li><b>2d20dis</b> (Multiple dice with the same size with disadventage)</li>
                <li>& combinations of all the options above</li>
            </ul>
        </section>
      </div>
    </div>
  );
}

export default InformationDisplay;