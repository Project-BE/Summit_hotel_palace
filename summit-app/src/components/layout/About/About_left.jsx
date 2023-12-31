import About1 from "../../../assets/aboutUs1.svg";
import { Slide, Fade } from "react-awesome-reveal";

import { Button } from '../Button/Button.style'
import styles from "./About_left.module.css";

function About_left() {
  return (
    <div className={styles.about}>
      <img src={About1} alt="About us image" />
      <div className={styles.about_caption}>
        <Fade>
          <Slide triggerOnce direction="right">
              <p>
                <span>SUMMIT HOTEL PALACE</span> A LUXURIOUS HOTEL THAT GONNA GIVE
                YOU THE BEST EXPERIENCE.
                <Button href="/reservas" > View rooms </Button> 
              </p>
          </Slide>
        </Fade>
      </div>
    </div>
  );
}

export default About_left;
