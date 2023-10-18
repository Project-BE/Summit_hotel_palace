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
            <span className="hovertext" data-hover="SAFE LOCKER">
              <li><PiVault /></li>
            </span>
            <span className="hovertext" data-hover="GYM">
              <li> <PiBarbell /> </li>
            </span>
            <span className="hovertext" data-hover="TELEVISION">  
              <li> <PiMonitor /> </li>
            </span>
            <span className="hovertext" data-hover="CASINO"> 
              <li> <PiDiceThree/> </li>
            </span>
            <span className="hovertext" data-hover="TENNIS">
              <li> <PiTennisBall/> </li>
            </span>
            <span className="hovertext" data-hover="POOL">
            <li> <PiSwimmingPool /> </li>
            </span>
            <span className="hovertext" data-hover="WIFI">
            <li> <PiWifiHigh /> </li>
            </span>
            <span className="hovertext" data-hover="RESTAURANT">
            <li> <PiForkKnife /> </li>
            </span>
          </ul>        
    </div>
  )
}
