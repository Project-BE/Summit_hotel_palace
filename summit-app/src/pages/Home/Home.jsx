import Header from "../../components/layout/Header/Header"
import About_left from "../../components/layout/About/About_left";
import About_right from "../../components/layout/About/About_right";
import Room from "../../components/Service/Room";
import Room_Reverse from "../../components/Service/Room_Reverse"
import Facilities from "../../components/Service/Facilities/Facilities";
import Footer from '../../components/layout/Footer/Footer'

import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-scroll'

import GrandImg from '../../assets/grandRoom.svg'
import MasterImg from '../../assets/masterRoom.svg'
import JuniorImg from '../../assets/juniorRoom.svg'

import styles from "./Home.module.css";

function App() {
  return (
    <>
      <div id="/" className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div id="about" className={styles.about_us}>
          <h2>About us</h2>
          <About_left />
          <About_right />
        </div>
        <div id="room" className={styles.rooms}>
          <h2>Rooms</h2>
          <Room 
            title={'MASTER ROOM'}
            description={'EXPERIENCE THE HEIGHNESS OF LUXURY, FEATURING A KING-SIZED BED, ELEGANT FURNISHINGS, AND BREATHTAKING CITY/SURROUNDING VIEWS.'}
            value={'$ 700,00'}
            img={MasterImg}
            slide={'right'}
            />
          <Room_Reverse
            title={'GRAND ROOM'}
            description={"ENTIRELY DESIGNED SPACE THAT FEATURES A COZY QUEEN-SIZED BED WITH PREMIUM DESIGNS FOR A RESTFUL NIGHT'S SLEEP."}
            value={'$500,00'}
            slide={'left'}
            img={GrandImg}
            />
            <Room
            title={'JUNIOR ROOM'}
            description={"OFFERS A COZY AMBIANCE WITH A SINGLE BED, MODERN AMENITIES, MAKING IT AN IDEAL CHOICE FOR SOLO TRAVELERS."}
            value={'$350,00'}
            slide={'right'}
            img={JuniorImg}
            />
            </div>
          <div className="facilities">
            <h2>Facilities</h2>
            <Facilities />
          </div>
          <div className={styles.background_wrapper}>
              <Fade>
                <h3>“WE GONNA MAKE YOU FEEL BETTER THAN IN YOUR HOME!”</h3> 
              </Fade>
          </div>
          <div className={styles.backTop}>
          <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}>  Back to Top </Link>
          </div>
          <div id="contact">
            <Footer />
          </div>
          </div>
    </>
  );
}

export default App;
