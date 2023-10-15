Header
import Header from '../../components/layout/Header/Header'
import styles from './Reservation.css'

export default function Reservation(){
    return(
        <>
        <div className={styles.header}>
            <Header />
        </div>
        <div>
            Página de reservas
        </div>
         
        </>
    )
}