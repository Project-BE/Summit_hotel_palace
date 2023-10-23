import Header from '../../components/layout/Header/HeaderReserve'
import Footer from '../../components/layout/Footer/Footer'

import { Link } from 'react-scroll'

import styles from './Reserves.module.css'

export default function Reserves() {
  return (
    <div id='/' className={styles.reserves}>
      <Header />
      <div className={styles.main_content}>
        <p>conteudo pag reservas</p>
      </div>
      <div className={styles.backTop}>
        <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}> <a href="backTop">  Back to Top </a> </Link>
      </div>
      <div id='contact'>
        <Footer />
      </div>
    </div>
  )
}
