import styles from './styles.module.css';
import { IRate } from '../../interfaces';
import { getFlag } from '../../helpers/getFlag';
import ua from '../../assets/flags/ua.svg';
import { formateRate } from '../../helpers/formateRate';
import CurRate from '../curRate/CurRate';

type Props = Omit<IRate, 'base_ccy'>;

const CurItem = ({ ccy, buy, sale }: Props) => {
    return (
        <li className={styles.cur_item}>
            <div className={styles.cur_item__cur}>
                <div className={styles.cur_item__l}>
                    <div className={styles.cur_item__flag_l}>
                        <img src={getFlag(ccy)} alt="currency flag" />
                    </div>
                    <p className={styles.cur_item__name_l}>{ccy}</p>
                </div>
                <p className={styles.cur_item__slash}>/</p>
                <div className={styles.cur_item__r}>
                    <div className={styles.cur_item__flag_r}>
                        <img src={ua} alt="currency flag" />
                    </div>
                    <p className={styles.cur_item__name_r}>UAH</p>
                </div>

            </div>
            <CurRate rate={buy} operation='buy' ccy={ccy}/>
            <CurRate rate={sale} operation='sale' ccy={ccy}/>
            {/* <div className={styles.cur_item__price}>{formateRate(buy)}</div> */}
            {/* <div className={styles.cur_item__price}>{formateRate(sale)}</div> */}
        </li>
    );
};

export default CurItem;