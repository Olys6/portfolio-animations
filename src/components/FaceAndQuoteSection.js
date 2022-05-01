import React, { useEffect, useState } from "react";
import { Typography, Link } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FaceAndQuoteSection = () => {

  const [i, setI] = useState(0)
  const languageIconElemsArray = [
    // <span> Full-stack engineer</span>,
    <span style={{ color: "#ffdc04" }} ><i className="fa-brands fa-js-square"></i> JavaScript engineer</span>,
    <span style={{ color: "#68dcfc" }}><i className="fa-brands fa-react"></i> React developer</span>,
    // <span><i className="fa-brands fa-python"></i> Python engineer</span>, 
    <span><img style={{ width: "29.5px" }} alt="python logo" src="/assets/LanguageLogos/python-seeklogo.com.svg"></img> <span style={{ color: "#4c82ad" }}>Python</span> <span style={{ color: "#ffcc3c" }}>engineer</span></span>,
    <span style={{ color: "#ff6c2c" }}><i className="fa-brands fa-swift"></i> Swift engineer</span>,
    <span style={{ color: "#529eba" }}><i className="fa-brands fa-wordpress"> WordPress </i> developer </span>,
    <span style={{ color: "#589c44" }}><i className="fa-brands fa-node-js"></i> Node.js developer</span>,
    <span style={{ color: "#e84c24" }}><i className="fa-brands fa-html5"></i> HTML developer</span>,
    <span style={{ color: "#389cd4" }}><i className="fa-brands fa-css3-alt"></i> CSS developer</span>,
  ]

  useEffect(() => {
    setTimeout(() => {
      if (i === languageIconElemsArray.length - 1) {
        setI(0)
      } else if (i < languageIconElemsArray.length) {
        setI(i + 1)
      }
    }, 1000)
  }, [i, languageIconElemsArray.length])



  return (
    <section id="faceAndQuoteSection" className="faceAndQuoteSection">
      <div>
        <div className="ollyFacePfp"></div>
        {/* <Typography variant="h3" sx={{ marginBottom: "-10px", textAlign:"center" }}>🇬🇧 🇳🇴 🇸🇪 🇩🇰 🇨🇭</Typography> */}
      </div>
      <div className="">

        <Typography className="oliverNameAndIntro" color="secondary" variant="h4">Hi my name is <span style={{ fontWeight: "bold" }}>Oliver S.</span> and I'm a <br className="languageSeperator" /> {languageIconElemsArray[i]}.</Typography>
        <br />

        <Typography color="secondary" variant="h5" sx={{ fontStyle: "italic" }}>"My goal is to improve and learn new skills with IT-based work experience allowing me to develop programs that will be helpful in everyday life."</Typography>
        <br />
        {/* <div className="underQuotelinks">
          <Link className="underQuotelink" href="https://github.com/Olys6" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-github"></i> Olys6</strong></Link>
          <Link className="underQuotelink" href="mailto:enquiries@olys.tech" color="secondary" underline="hover" ><strong><i className="fa-solid fa-envelope"></i> enquiries@olys.tech</strong></Link>
          <Link className="underQuotelink" href="https://www.linkedin.com/in/oliver-skjevesland/" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-linkedin"></i> oliver-skjevesland</strong></Link>
          <Link className="underQuotelink" href="#" onClick={copy} color="secondary" underline="hover" ><strong><i class="fa-brands fa-discord"></i> OliverS#5586</strong></Link>
        </div> */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: "0px" }} className="animate__animated animate__bounce animate__infinite animate__slower">
          {/* <Typography variant="h4" color="secondary">Scroll down</Typography> */}
          <ExpandMoreIcon style={{ fontSize: "100px", color: "white" }} />
          <ExpandMoreIcon style={{ fontSize: "100px", color: "white", marginTop: "-75px"}} />
        </div>
      </div>
    </section>
  )
}

export default FaceAndQuoteSection