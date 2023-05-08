import styles from './Prices.module.css'
import {prices} from '../../data/Prices'

export const Prices = () =>{
    return(
        <div className={styles.container}>
            {
               prices.map(item => {
                const red = item.red ? styles.colorRed : ''
                const popular = item.popular ? styles.title1:''
                const yellow = item.yellow ? styles.yellow:''
                // const white = item.white ? styles.white:''
                return(
                    <div key={item.id} className={styles.block}>
                        <div className={styles.blockTitle}>
                        <h5 className={[styles.title,popular].join(' ')}>{item.title1}</h5>
                        <h5 className={styles.title}>{item.title}</h5>
                        </div>
                        <div className={styles.prise}>
                        <span className={styles.dollar}>{item.dollar}</span>
                        <span className={[styles.cost,red].join(' ')} >{item.cost}</span>
                        </div>
                        <p className={styles.text}>{item.text}</p>
                        <p className={styles.text}>{item.text1}</p>
                        <span className={styles.textNumber}>{item.textNumber}</span>
                        <button className={[styles.button,yellow].join(' ')}>{item.button}</button>
                        <div className={styles.outline}></div>
                    </div>

                )
               }) 
            }
        </div>
    )
}