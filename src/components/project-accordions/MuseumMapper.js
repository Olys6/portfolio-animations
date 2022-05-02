import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MuseumMapperAccordion = () => {

  const [expandedBrightness, setExpandedBrightness] = useState("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)");

  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    (isExpanded ? setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 2)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)")
      :
      setExpandedBrightness("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/MuseumMapper/MuseumMapperShowcase.gif)"));
  };

  return (
    <Accordion className="projectAccordion" sx={{ minHeight: "20rem", transition: ".3s", backgroundImage: expandedBrightness, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "1rem" }} expanded={expanded === 'panel'} onChange={handleChange('panel')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" sx={{ fontSize: "50px", backgroundColor: "hsl(348, 100%, 61%)", borderRadius: "4px" }} />}
        sx={{ backgroundColor: "secondary" }}
      >
        <Typography sx={{ fontWeight: "bold", backgroundColor: "hsl(348, 100%, 61%)", borderRadius: "4px", padding: "3px" }} color='secondary' variant="h5" >Museum Mapper</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "bold", textDecoration: "underline", marginTop: "-15px", marginBottom: "-16px" }} variant="h6">1 week / Group of 4</Typography>
        <br />
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          I made a website for finding museums in England using React and MongoDB in a group of 4.
          My group and I pair coded the back-end and we later worked separately on the front-end.
          This project made me learn a lot about CSS and HTML as I focused on styling.
        </Typography>
        <br />
        <div style={{ display: "flex", gap: "1rem", marginTop: "-6px" }}>
          <Button href="https://museum-mapper.herokuapp.com/" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">Visit page</Button>
          <Button href="https://github.com/Olys6/SEI-Project-3#readme" target="_blank" sx={{ fontWeight: "bold", fontSize: "20px" }} variant="contained">look at ReadMe</Button>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default MuseumMapperAccordion