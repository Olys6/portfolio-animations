import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import './App.css';
import 'animate.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import FaceAndQuoteSection from './components/FaceAndQuoteSection'
import { Link } from '@mui/material'

const theme = createTheme(themeOptions);

function App() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  const copy = async () => {
    await navigator.clipboard.writeText('OliverS#5586');
    alert('Username copied! Go to discord and paste the username in the add friends tab.');
  }

  return (
    <ThemeProvider theme={theme}>
      <ScrollContainer>
        <ScrollPage page={0} >
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <FaceAndQuoteSection />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1} id="nextPage">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>
                <Link className="underQuotelink" href="https://github.com/Olys6" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-github"></i> Olys6</strong></Link>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                <Link className="underQuotelink" href="mailto:enquiries@olys.tech" color="secondary" underline="hover" ><strong><i className="fa-solid fa-envelope"></i> enquiries@olys.tech</strong></Link>
              </Animator>
              <Animator animation={MoveIn(-1000, 0)}>
                <Link className="underQuotelink" href="https://www.linkedin.com/in/oliver-skjevesland/" target="_blank" rel="noreferrer" color="secondary" underline="hover" ><strong><i className="fa-brands fa-linkedin"></i> oliver-skjevesland</strong></Link>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                <Link className="underQuotelink" href="#" onClick={copy} color="secondary" underline="hover" ><strong><i class="fa-brands fa-discord"></i> OliverS#5586</strong></Link>
              </Animator>
            </span>
          </div>

        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </ThemeProvider>
  );
}

export default App;
