import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BerserkersTrialAccordion = () => {

  const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/BerserkersTrial/Filmage-2021-12-16_130308.gif)");

  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1.2)), url(/assets/BerserkersTrial/Filmage-2021-12-16_130308.gif)")
      :
      setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/BerserkersTrial/Filmage-2021-12-16_130308.gif)"));
  };

  return (
    <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/assets/BerserkersTrial/CobblestroneSimple.jpeg)", borderRadius: "4px", backgroundSize: "cover" }} />}
        id="accordionSummary"
        sx={{ backgroundColor: "secondary" }}
      >
        <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/assets/BerserkersTrial/CobblestroneSimple.jpeg)", backgroundSize: "contain", backgroudPosition: "center", borderRadius: "4px", padding: "3px" }} color='secondary' variant="h5" >Berserkers Trial</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "bold", textDecoration: "underline" }} variant="h6">1 week / Solo</Typography>
        <br />
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          I worked on a classic grid-based game with HTML, JavaScript and CSS. I chose Pac-man,
          learnt and got a better understanding of JavaScript and CSS from this experience.
        </Typography>
        <br />
        <div style={{ display: "flex", gap: "1rem", marginTop: "-5px" }}>
          <Button href="https://olys6.github.io/Berserkers-Trial/" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">play game</Button>
          <Button href="https://github.com/Olys6/SEI-Project1#readme" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">look at ReadMe</Button>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default BerserkersTrialAccordion