import styles from "./About_right.module.css";
import { Slide, Fade } from "react-awesome-reveal";
import About2 from "../../../assets/aboutUs2.svg";

export default function About_right() {
  return (
    <div className={styles.about}>
      <img src={About2} alt="About us image" />
      <div className={styles.about_caption}>
        <Fade>
          <Slide>
            <p>
              <span>WE OFFER 24H SERVICES</span> WE WORK 24H TO PROVIDE YOU A
              UNIQUE EXPERIENCE.
              <a href="#rooms">Contact us</a>
            </p>
          </Slide>
        </Fade>
      </div>
    </div>
  );
}
