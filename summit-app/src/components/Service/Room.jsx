import styles from './Room.module.css'
import { Slide, Fade } from "react-awesome-reveal";

import { Button } from "../layout/Button/Button.style";

export default function Room({title, description, value, img, slide}) {
  return (
    <div className={styles.rooms}>
         <img src={img} alt="room photo" />
         <div className={styles.rooms_content}>
          <Slide triggerOnce direction={slide}>
         <Fade>
          <p> <span>{title}</span>
            {description}
          </p>
            <p ><span>{value} /NIGHT</span></p>
         </Fade>
          </Slide>
          <Button>Reserve</Button>
         </div>
    </div>
  )
}
