import '../../styles/User/Aftercare.css';
import React, { useState } from "react";


const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Aftercare = () => {
  return (
    <div className="aftercare-page">
      <h1 className="page-title">Aftercare and Healing</h1>
      <p className="intro-text">
        Everyone heals differently and some healing journeys are easier and some
        require a little more attention. However, together we can hopefully
        help yours a little easier.
      </p>

      <AccordionItem title="Normal things to expect during healing">
        <h4>Swelling</h4>
        <p>
          Swelling is normal. Initial swelling is expected the first 5–7 days, 
          but may decrease gradually in the first month.
        </p>

        <br/>
        
        <h4>Bleeding</h4>
        <p>
          Some bleeding in the first 12–24 hours is not uncommon. Try rinsing
          with saline or warm water.
        </p>
        
        <br/>
        
        <h4>Pain</h4>
        <p>
          Pain and soreness are expected with any piercing for a few days or
          weeks. Avoid touching or moving your piercing.
        </p>
        
        <br/>
        
        <h4>Discharge</h4>
        <p>
          Clear discharge and "crusties" are part of healing. Do not pick them
          off — clean gently.
        </p>
        
        <br/>
        
        <h4>Bruising</h4>
        <p>
          Bruising can happen, especially near soft tissue. This is normal.
        </p>
      </AccordionItem>

      <AccordionItem title="Things to avoid during healing">
      
          <p>-Touching or twisting the piercing</p>
          <p>-Using soaps, alcohol, peroxide, lotions, etc.</p>
          <p>-Removing jewelry before healing</p>
          <p>-Sleeping on fresh piercings</p>
          <p>-Submerging in water (pools, baths, etc.)</p>
          <p>-Taking advice from non-professionals</p>
          <p>-Allowing pets or partners near new piercings</p>
       
      </AccordionItem>

      <AccordionItem title="Downsizing and Jewelry">

        <p>Starter jewelry is longer to allow swelling.</p>
        <p>Downsizing in time is important to reduce irritation and prevent migration.</p>
        
      </AccordionItem>

      <AccordionItem title="Non-Oral Piercings Care"> 

        <p>Clean with sterile saline 2–3 times a day.</p>
        <p>Do not scrub.</p>
        <p> Do not try to "unstick" jewelry from tissue.</p>

      </AccordionItem>

      <AccordionItem title="Oral Piercings Care">

          <p>Rinse with alcohol-free mouthwash or saline. </p> 
          <p>Brush gently around the piercing. </p>
          <p>Avoid spicy food, smoking, alcohol, and clicking jewelry on teeth. </p>

      </AccordionItem>

      <AccordionItem title="Microdermals & Surface Piercings">

        <p>These are semipermanent and prone to rejection.</p>
        <p>  Clean gently with saline. </p>
        <p>Avoid touching, makeup, and snagging.</p>

      </AccordionItem>

      <AccordionItem title="Tooth Gem Aftercare">
        
        <p>Avoid eating and drinking (except water) for 1 hour. </p>
        <p>Don’t brush the gem area for 24 hours. </p> 
        <p>Smoking, alcohol, and mouthwash can weaken the adhesive. </p>

      </AccordionItem>
    </div>
  );
};

export default Aftercare;
