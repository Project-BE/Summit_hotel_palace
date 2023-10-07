import styles from './Room.module.css'
import { Slide, Fade } from "react-awesome-reveal";

export default function Room({title, description, value, img, slide}) {
  return (
    <div className={styles.rooms}>
         <img src={img} alt="room photo" />
         <div className={styles.rooms_content}>
          <Slide direction={slide}>
         <Fade>
          <p> <span>{title}</span>
            {description}
          </p>
            <p ><span>{value} /NIGHT</span></p>
          <a href="#" role="button">Reserve</a>
         </Fade>
          </Slide>
         </div>
    </div>
  )
}
