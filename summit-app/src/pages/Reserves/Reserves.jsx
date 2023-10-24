import Header from '../../components/layout/Header/HeaderReserve'
import Footer from '../../components/layout/Footer/Footer'
import SmallCalendar from '../../components/SmallCalendar/SmallCalendar'
import Select from '../../components/form/Select'

import { Button } from '../../components/layout/Button/Button.style'

import { Link } from 'react-scroll'

import styles from './Reserves.module.css'

export default function Reserves() {
  return (
    <div id='/' className={styles.reserves}>
      <Header />
      <div className={styles.main_content}>
        <h2>Reserves</h2>
        
        <form className={styles.form} action="reservation">
        <Select name='select a room'  value={'select'} />
        <div className={styles.data_reservation}>
          <div>
            <Select name='rooms'  value={'rooms'} />
            <Select name='adults'  value={'adults'} />
            <Select name='children'  value={'children'} />
          </div>
          <div className={styles.calendar}>
            <SmallCalendar />
          </div>
        </div>
        <Button type='submit'> Proceed </Button>
        </form>
      </div>
      <div className={styles.backTop}>
        <Link href='/' activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}> Back to Top </Link>
      </div>
      <div id='contact'>
        <Footer />
      </div>
    </div>
  )
}
