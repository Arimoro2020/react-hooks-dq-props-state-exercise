import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");
  const [variableWeight, setVariableWeight] = useState(2.5)
  // const [allOffSpring, setAllOffSpring] = useState(offspring)

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    e.target.name === "+"? setVariableWeight(variableWeight=> variableWeight + 1) 
    : setVariableWeight(variableWeight=> variableWeight - 1)
  }

  
 
  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={(e) =>setEyeColor(eyeColor => e.target.value)}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={(e) =>setEyeColor(eyeColor => e.target.value)}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={(e) =>setEyeColor(eyeColor => e.target.value)}
      />
      Glowing<br></br>
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
        <BabyHog eyeColor={eyeColor} variableWeight={variableWeight} allOffSpring={offspring} handleChangeWeight={handleChangeWeight}/>
      </ul>
    </div>
  );
}

export default HogBoss;
