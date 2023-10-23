import { PiSwimmingPool ,
  PiTennisBall,
  PiWifiHigh,
  PiForkKnife,
  PiDiceThree,
  PiVault,
  PiBarbell,
  PiMonitor } from "react-icons/pi";

  import styles from './Facilities.module.css'

export default function Facilities() {
  return (
    <div className={styles.facilities}>
        <ul>
          <li>
            <span className={styles.hovertext} data-hover="SAFE LOCKER">
            <PiVault />
            </span>
          </li>
          <li>
            <span className={styles.hovertext} data-hover="GYM">
            <PiBarbell /> 
            </span>
          </li>
          <li>
            <span className={styles.hovertext} data-hover="TELEVISION">  
            <PiMonitor />
          </span>
        </li>
        <li> 
          <span className={styles.hovertext} data-hover="CASINO"> 
            <PiDiceThree/> 
          </span>
        </li>
        <li>
          <  span className={styles.hovertext} data-hover="TENNIS">
              <PiTennisBall/>
          </span>
        </li>
        <li> 
          <span className={styles.hovertext} data-hover="POOL">
          <PiSwimmingPool /> 
          </span>
        </li>
        <li> 
          <span className={styles.hovertext} data-hover="WIFI">
          <PiWifiHigh /> 
          </span>
        </li>
        <li> 
          <span className={styles.hovertext} data-hover="RESTAURANT">
          <PiForkKnife />
          </span>
        </li>
      </ul>        
    </div>
  )
}
