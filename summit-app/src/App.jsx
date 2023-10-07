import Header from "./components/layout/Header/Header"
import About_left from "./components/layout/About/About_left";
import About_right from "./components/layout/About/About_right";
import Room from "./components/Service/Room";

import GrandImg from './assets/grandRoom.svg'

import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.about_us}>
          <h2>About us</h2>
          <About_left />
          <About_right />
        </div>
        <div className={styles.rooms}>
        </div>
        <Room 
          title={'MASTER ROOM'}
          description={'EXPERIENCE THE HEIGHNESS OF LUXURY, FEATURING A KING-SIZED BED, ELEGANT FURNISHINGS, AND BREATHTAKING CITY/SURROUNDING VIEWS.'}
          value={'$ 700,00'}
          img={GrandImg}
          slide={'right'}
        />
        <Room
          title={'GRAND ROOM'}
          description={"ENTIRELY DESIGNED SPACE THAT FEATURES A COZY QUEEN-SIZED BED WITH PREMIUM DESIGNS FOR A RESTFUL NIGHT'S SLEEP."}
          value={'$500,00'}
          slide={'left'}
        />
      </div>
    </>
  );
}

export default App;
