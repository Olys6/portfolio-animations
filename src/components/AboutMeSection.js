import React from 'react'
import { Typography } from '@mui/material'

const AboutMeSection = () => {



  return(
    <section id="aboutMeSection" className="aboutMeSection">
      <Typography color="secondary" variant="h2" className="AboutMePageTitle">About Me</Typography>

      <Typography variant="h5" color="secondary" className="aboutMeDescription">
        I am a self-taught web developer and specially appreciate front-end development. After 2 years of learning on my own, I decided to join an immersive course to take these skills to the next level.
      </Typography>
      <Typography variant="h5" color="secondary" className="aboutMeDescription">
        What sparks my interest and motivates me the most is to bring my ideas to life while solving a problem and learning from it.
      </Typography>
      <Typography variant="h5" color="secondary" className="aboutMeDescription">
        I work best in a collaborative environment,
        sharing and learning from others while exchanging new ideas.
        I'm looking to become a junior software engineer within a well-coordinated team.
      </Typography>

      <Typography variant="h5" color="secondary" className="aboutMeDescription">I love making apps/websites and have a passion for styling and making tools.</Typography>
      <Typography color="secondary" variant="h5" className="aboutMeDescription">
        I'm looking to work as a junior software engineer to make software that people will use in day to day life.
        I am self-driven to get things done and love having a teammate work on a project with me!
      </Typography>
      {/* <Typography color="secondary" variant="h5" className="aboutMeDescription">
        I recently finished a 3-month immersive course from General Assembly that taught me software engineering.
        I learnt JavaScript, Python/Django, React Hooks, Node/Express, MongoDB, GitHub, HTML, CSS, PostgreSQL, Insomnia, Tableplus, MacOS.
      </Typography> */}
      <Typography color="secondary" variant="h5" className="aboutMeDescription">
        I am extremely thrilled about finding different ways to code and making coding life simpler.
        I will usually look for tools online in my free time to see what I can do to improve my experience.
      </Typography>

    </section>
  )
}

export default AboutMeSection