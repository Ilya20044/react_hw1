
import styles from './App.module.css'
import {Title} from '../Title/Title'
import {Prices} from '../Prices/Prices'
import image from '../../assets/images/Radio.svg'


export const App = () =>{
  return (
    <div className={styles.container}>
      <Title/>
      <Prices/>
      <img src={image} className={styles.image}/>
    </div>
  );
}


