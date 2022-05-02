import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RapidGamesAccordion = () => {

  const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/RapidGames/RapidGamesShowcase.gif)");

  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 2)), url(/assets/RapidGames/RapidGamesShowcase.gif)")
      :
      setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/RapidGames/RapidGamesShowcase.gif)"));
  };

  return (
    <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "#505cc4", borderRadius: "4px" }} />}
        sx={{ backgroundColor: "secondary" }}
      >
        <Typography sx={{ fontWeight: "bold", backgroundColor: "#505cc4", borderRadius: "4px", padding: "3px" }} color='secondary' variant="h5" >Rapid Games</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "bold", textDecoration: "underline" }} variant="h6">48 Hours / Duo</Typography>
        <br />
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          I worked with a classmate with the freetogame API and made a website using React to help the user find a free game to play.
          In this project,
          I learnt a lot about JS fundamentals and logic.
        </Typography>
        <br />
        <div style={{ display: "flex", gap: "1rem", marginTop: "-5px" }}>
          <Button href="https://rapidgames.netlify.app" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">Visit page</Button>
          <Button href="https://github.com/Olys6/Rapid-Games#readme" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">look at ReadMe</Button>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default RapidGamesAccordion