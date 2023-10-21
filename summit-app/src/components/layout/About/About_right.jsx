import styles from "./About_right.module.css";
import About2 from "../../../assets/aboutUs2.svg";

import { Link } from 'react-scroll'
import { Slide, Fade } from "react-awesome-reveal";

export default function About_right() {
  return (
    <div className={styles.about}>
      <img src={About2} alt="About us image" />
      <div className={styles.about_caption}>
        <Fade>
          <Slide triggerOnce>
            <p>
              <span>WE OFFER 24H SERVICES</span> WE WORK 24H TO PROVIDE YOU A
              UNIQUE EXPERIENCE.
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={600}> Contact us </Link>
            </p>
          </Slide>
        </Fade>
      </div>
    </div>
  );
}
