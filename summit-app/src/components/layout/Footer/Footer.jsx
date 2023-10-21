import styles from './Footer.module.css'

import { PiWhatsappLogoFill, PiInstagramLogoFill, PiFacebookLogoFill, PiPhoneFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";




export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.contactArea}>
            <div className={styles.contact}>
                <p><PiPhoneFill/> 0800-0000-0011</p>
                <p><IoMail /> email@email.com</p>
            </div>
            <div className={styles.socialMedia}>
                <ul>
                <li><PiWhatsappLogoFill /></li>
                <li><PiInstagramLogoFill /> </li>
                <li><PiFacebookLogoFill /> </li>
                </ul>
            </div>
        </div>
        <div className={styles.copy}>
            <p><span>SUMMIT PALACE HOTEL</span> &copy; 2023. Todos os direitos reservados, s que não :D </p>
        </div>
    </div>
  )
}
