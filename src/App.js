import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import './App.css';
import 'animate.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import FaceAndQuoteSection from './components/FaceAndQuoteSection'
import { Link, Box, TextField, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectsSection from './components/ProjectsSection'
import GaetteAccordion from './components/project-accordions/Gaette'
import AboutMeSection from './components/AboutMeSection'
import Interests from './components/Interests.js'
import PortfolioScroll from './components/project-accordions/PortfolioScroll'

const theme = createTheme(themeOptions);

// const skills = [
//   ["JavaScript", <i style={{ fontSize: "70px", color: "#ffdc04" }} className="fa-brands fa-js-square"></i>],
//   ["TypeScipt", <img alt="TypeScript Logo" style={{ width: "60px", borderRadius: "6px", marginBottom: "-2px" }} src="/assets/LanguageLogos/typescript-seeklogo.com.svg" />],
//   ["React Hooks", <i style={{ color: "#68dcfc" }} className="fa-brands fa-react"></i>],
//   ["MongoDB", <img alt="Mongo DB Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/mongodb-svgrepo-com.svg" />],
//   ["Python", <img style={{ width: "54px" }} alt="python logo" src="/assets/LanguageLogos/python-seeklogo.com.svg"></img>],
//   ["Django", <img alt="Django logo" style={{ width: "55px", marginBottom: "-15px" }} src="/assets/LanguageLogos/django-seeklogo.com.svg" />],
//   ["PostgreSQL", <img alt="Postres Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/postgresql-svgrepo-com.svg" />],
//   ["Swift", <i style={{ color: "#ff6c2c" }} className="fa-brands fa-swift"></i>],
//   ["WordPress", <i style={{ color: "#529eba" }} className="fa-brands fa-wordpress"></i>],
//   ["HTML", <i style={{ color: "#e84c24" }} className="fa-brands fa-html5"></i>],
//   ["CSS", <i style={{ color: "#389cd4" }} className="fa-brands fa-css3-alt"></i>],
//   ["React Bootstrap", <i style={{ color: "#8054b4" }} className="fa-brands fa-bootstrap"></i>],
//   ["Material UI", <img alt="MUI logo" style={{ width: "70px", marginBottom: "-10px" }} src="assets/LanguageLogos/material-ui-seeklogo.com.svg" />],
//   ["Bulma", <img alt="Bulma logo" style={{ width: "40px" }} src="/assets/LanguageLogos/Bulma.svg" />],
//   ["Node.js", <i style={{ color: "#589c44" }} className="fa-brands fa-node-js"></i>],
//   ["Docker", <img alt="Express Logo" style={{ width: "70px", marginBottom: "-15px" }} src="/assets/LanguageLogos/docker-svgrepo-com (1).svg" />],
//   ["Yarn", <i style={{ color: "#388cbc" }} className="fa-brands fa-yarn"></i>],
//   ["npm", <i style={{ color: "#d03c34" }} className="fa-brands fa-npm"></i>],
//   ["Tableplus", <img alt="Tableplus Logo" style={{ width: "80px", marginBottom: "-20px" }} src="/assets/LanguageLogos/TablePlusLogo.png" />],
//   ["Insomnia", <img alt="Insomnia Logo" style={{ width: "75px", marginBottom: "-15px" }} src="/assets/LanguageLogos/insomnia-svgrepo-com.svg" />],
// ]

const skills = {
  "JavaScript": <i style={{ fontSize: "70px", color: "#ffdc04" }} className="fa-brands fa-js-square"></i>,
  "TypeScipt": <img alt="TypeScript Logo" style={{ width: "60px", borderRadius: "6px", marginBottom: "-2px" }} src="/assets/LanguageLogos/typescript-seeklogo.com.svg" />,
  "React Hooks": <i style={{ color: "#68dcfc" }} className="fa-brands fa-react"></i>,
  "MongoDB": <img alt="Mongo DB Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/mongodb-svgrepo-com.svg" />,
  "Python": <img style={{ width: "54px" }} alt="python logo" src="/assets/LanguageLogos/python-seeklogo.com.svg"></img>,
  "Django": <img alt="Django logo" style={{ width: "55px", marginBottom: "-15px" }} src="/assets/LanguageLogos/django-seeklogo.com.svg" />,
  "PostgreSQL": <img alt="Postres Logo" style={{ width: "70px", marginBottom: "-12px" }} src="/assets/LanguageLogos/postgresql-svgrepo-com.svg" />,
  "Swift": <i style={{ color: "#ff6c2c" }} className="fa-brands fa-swift"></i>,
  "WordPress": <i style={{ color: "#529eba" }} className="fa-brands fa-wordpress"></i>,
  "HTML": <i style={{ color: "#e84c24" }} className="fa-brands fa-html5"></i>,
  "CSS": <i style={{ color: "#389cd4" }} className="fa-brands fa-css3-alt"></i>,
  "React Bootstrap": <i style={{ color: "#8054b4" }} className="fa-brands fa-bootstrap"></i>,
  "Material UI": <img alt="MUI logo" style={{ width: "70px", marginBottom: "-10px" }} src="assets/LanguageLogos/material-ui-seeklogo.com.svg" />,
  "Bulma": <img alt="Bulma logo" style={{ width: "40px" }} src="/assets/LanguageLogos/Bulma.svg" />,
  "Node.js": <i style={{ color: "#589c44" }} className="fa-brands fa-node-js"></i>,
  "Docker": <img alt="Express Logo" style={{ width: "70px", marginBottom: "-15px" }} src="/assets/LanguageLogos/docker-svgrepo-com (1).svg" />,
  "Yarn": <i style={{ color: "#388cbc" }} className="fa-brands fa-yarn"></i>,
  "npm": <i style={{ color: "#d03c34" }} className="fa-brands fa-npm"></i>,
  "Tableplus": <img alt="Tableplus Logo" style={{ width: "80px", marginBottom: "-20px" }} src="/assets/LanguageLogos/TablePlusLogo.png" />,
  "Insomnia": <img alt="Insomnia Logo" style={{ width: "75px", marginBottom: "-15px" }} src="/assets/LanguageLogos/insomnia-svgrepo-com.svg" />,
}

function App() {

  const [filteredSkills, setFilteredSkills] = useState(Object.entries(skills))
  const [search, setSearch] = useState("")

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  const copy = async () => {
    await navigator.clipboard.writeText('OliverS#5586');
    alert('Username copied! Go to discord and paste the username in the add friends tab.');
  }



  const handleSearch = (event) => {
    if (event.target.value.includes("\\") || event.target.value.includes("(") || event.target.value.includes(")")
      || event.target.value.includes("*") || event.target.value.includes("[") || event.target.value.includes("+")) return;

    setSearch(event.target.value)
  }

  // const regexSearch = new RegExp(search, 'ig')
  console.log(Object.entries(skills)[0])

  useEffect(() => {

    const regexSearch = new RegExp(search, 'ig')
    
    setFilteredSkills(Object.entries(skills).filter(skill => {
      // if (regexSearch.test(skill[0])){
      //   return skill
      // }
      return regexSearch.test(skill[0])

    }))

  }, [search])

  console.log(filteredSkills)
  

  return (
    <ThemeProvider theme={theme}>
      <ScrollContainer>
        <ScrollPage page={0} >
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <FaceAndQuoteSection />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1} id="nextPage">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", zIndex: "+2" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={batch(MoveIn(-1000, 0), MoveOut(1000, 0))}>
                <Link className="underQuotelink" href="https://github.com/Olys6" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-github"></i> Olys6</strong></Link>
              </Animator>
              <Animator animation={batch(MoveIn(1000, 0), MoveOut(-1000, 0))}>
                <Link className="underQuotelink" href="mailto:enquiries@olys.tech" color="secondary" underline="hover" ><strong><i className="fa-solid fa-envelope"></i> enquiries@olys.tech</strong></Link>
              </Animator>
              <Animator animation={batch(MoveIn(-1000, 0), MoveOut(1000, 0))}>
                <Link className="underQuotelink" href="https://www.linkedin.com/in/oliver-skjevesland/" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-linkedin"></i> oliver-skjevesland</strong></Link>
              </Animator>
              <Animator animation={batch(MoveIn(1000, 0), MoveOut(-1000, 0))}>
                <Link className="underQuotelink" href="#" onClick={copy} color="secondary" underline="hover" ><strong><i className="fa-brands fa-discord"></i> OliverS#5586</strong></Link>
              </Animator>
            </span>
          </div>

        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginLeft: "-30px"}}>
              <Typography sx={{ marginTop: "-40px", marginBottom: "40px" }} variant="h2" textAlign="center" color="secondary"><ExpandMoreIcon sx={{ fontSize: "40px" }} />My Skills<ExpandMoreIcon sx={{ fontSize: "40px" }} /></Typography>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                }}
              >
                <TextField autoFocus={true} onChange={handleSearch} focused color="secondary" size="small" fullWidth label={<Typography sx={{ fontSize: "30px", margin: "-12px 0 0 0"}}>Search</Typography>} id="fullWidth" />
              </Box>
              <ul className="skillLogos">
                {filteredSkills.map(([key, logo], i) => (
                  <li className="skillLogo" key={i}>
                    {key} <span style={{ fontSize: "60px" }}>{logo}</span>
                  </li>
                ))}
              </ul>
            </Box>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(MoveIn(1000, 0), MoveOut(-1000, 0), Sticky(20))}>
            <ProjectsSection />
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className="projectsSection" style={{ marginRight: "-20px" }}>
              <GaetteAccordion />
              <PortfolioScroll />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={ZoomInScrollOut}>
            <AboutMeSection />
          </Animator>
        </ScrollPage>
        <ScrollPage page={6}>
          <Animator animation={FadeUp}>
            <Interests />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </ThemeProvider>
  );
}

export default App;
