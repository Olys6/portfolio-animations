import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PCEnthusiastsAccordion = () => {

  const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/PCEnthusiasts/Presentation.gif)");

  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 2)), url(/assets/PCEnthusiasts/Presentation.gif)")
      :
      setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/PCEnthusiasts/Presentation.gif)"));
  };

  return (
    <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundImage: "linear-gradient(to right top, #092145, #05316c, #0c4094, #234ebe, #415ce8)", borderRadius: "4px" }} />}
        sx={{ backgroundColor: "secondary" }}
      >
        <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(to right top, #092145, #05316c, #0c4094, #234ebe, #415ce8)", borderRadius: "4px", padding: "3px" }} color='secondary' variant="h5" >PC Enthusiasts</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "bold", textDecoration: "underline" }} variant="h6">1 week / Solo</Typography>
        <br />
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          I created a website with React as my front-end and Django as my back-end.
          The website allows you to create different computer builds from a range of components if you are logged in.
        </Typography>
        <br />
        <div style={{ display: "flex", gap: "1rem", marginTop: "-5px" }}>
          <Button href="https://pc-enthusiasts.herokuapp.com" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">Visit page</Button>
          <Button href="https://github.com/Olys6/PC-Enthusiasts/tree/main#readme" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">look at ReadMe</Button>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default PCEnthusiastsAccordion