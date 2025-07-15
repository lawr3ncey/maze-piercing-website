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

      <AccordionItem title="Typical outcomes during the healing process">
        <h4>Pain</h4>
          <p>Any piercing is likely to cause pain and stiffness for a few days or weeks.</p>
          <p>Don't move or touch your piercing.</p>

        <br/>

        <h4>Bleeding</h4>
          <p>It's normal to experience some bleeding over the first 12 to 24 hours.</p>
          <p>Try using warm water or saline to rinse.</p>
        
        <br/>

        <h4>Swelling</h4>
          <p>Within the first five to seven days, swelling is normal, but it may progressively go down within the first month.</p>

        <br/>

        <h4>Getting bruised</h4>
          <p>Bruising is possible, particularly in close proximity to soft tissue.</p>
          <p>This is typical.</p>

        <br/>

        <h4>Discharge</h4>
          <p>Clear discharge and "crusties" are part of healing.</p>
          <p>Do not pick them off — clean gently.</p>
        
        <br/>
      </AccordionItem>

      <AccordionItem title="Things to stay away from while recovering">
        <p>-Rubbing, touching the piercing or twisting it.</p>
        <p>-Using lotions, peroxide, alcohol, soaps, etc.</p>
        <p>-Taking off jewelry before to recovery.</p>
        <p>-Sleeping on fresh piercings.</p>
        <p>-Submerging, diving in water (pools, baths, etc.)</p>
        <p>-Taking advice from non-professionals.</p>
        <p>-Letting partners or pets get close to your freshly pierced area.</p>
      </AccordionItem>

      <AccordionItem title="Downsizing and Jewelry">
        <p>In order to account for the swelling that may occur during the early phases of healing,</p>
        <p>your initial starter jewelry will nearly always be longer.</p>
        <p>Timely downsizing is essential to minimize annoyance and stop migration.</p>
      </AccordionItem>

      <AccordionItem title="Oral Piercings Care">
        <p>Rinse with alcohol-free mouthwash or saline. </p> 
        <p>Brush gently around the piercing. </p>
        <p>Avoid spicy food, smoking, alcohol, and clicking jewelry on teeth. </p>
      </AccordionItem>

      <AccordionItem title="Non-Oral Piercings Care"> 
        <p>Clean with sterile saline 2–3 times a day.</p>
        <p>Do not scrub.</p>
        <p> Do not try to "unstick" jewelry from tissue.</p>
      </AccordionItem>

      <AccordionItem title="Microdermals & Surface Piercings">
        <p>These are semipermanent and prone to rejection.</p>
        <p>Clean gently with saline. </p>
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
