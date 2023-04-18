import React from "react";
import normalBaby  from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
// import offspring from "../data";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`



function BabyHog(props) {
  
  const {eyeColor, allOffSpring,variableWeight, handleChangeWeight} = props

  // const eyeColorMapper = `../assets/${eyeColor}-eyes.png`
 
  let hogPicture;

  switch (true) {
    case eyeColor==='blue': 
         hogPicture = BlueBaby;
           break;
    case eyeColor ==='glowing': 
       hogPicture = GlowingBaby;
         break;
    case eyeColor ==='sun': 
       hogPicture = SunBaby;
         break;
    default: 
     hogPicture = normalBaby;
       break;
  }
 


  return (allOffSpring.map(baby =>
  <>
  <li className="hogbabies" key={baby.id}>
    <h1>Name: {baby.name}</h1>
    <h3>Weight: {variableWeight} Tons</h3>
    <h3>Hobby: {baby.hobby}</h3>
    <h4>Eye Color: {eyeColor}</h4>

    <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
    <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

    <div className="hb-wrap">
      <img
        src={hogPicture}
        style={{ height: "200px" }}
        alt="MasterBlasterJrJr"
      />
    </div>
  </li>
  </>


    
  ));
}

export default BabyHog;
