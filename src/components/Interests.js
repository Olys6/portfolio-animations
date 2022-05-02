import React from 'react'
import { Typography, Link } from '@mui/material'


const Interests = () => {



  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Typography color="secondary" variant="h2">My Interests</Typography>
      <div className="computerInterest">
        <Typography color="secondary" variant="h3">Computers <i class="fa-solid fa-computer"></i></Typography>
        <Typography color="secondary" variant="h5">
          I'm really into computer hardware as well as games and I built my own gaming PC.
          I love finding new software and hardware to modify my experience using devices.
          <br />
          I am familiar with computer hardware as I even built my computer!
        </Typography>
      </div>
      <div className="skiingInterest">
        <Typography color="secondary" variant="h3">Skiing <i class="fa-solid fa-person-skiing"></i></Typography>
        <Typography color="secondary" variant="h5">
          I enjoy skiing.
          I usually go up to Switzerland to ski with my family but I've also gone on a few ski field trips with friends and classmates.
          I've been skiing since I was about 3 years old.
        </Typography>
      </div>
      <Link href='#' color="secondary">Go back to top</Link>
    </div>

  )
}

export default Interests