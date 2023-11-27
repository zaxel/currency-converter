import styles from './styles.module.css';
import { IRate } from '../../interfaces';
import { getFlag } from '../../helpers/getFlag';
import ua from '../../assets/flags/ua.svg';
import { formateRate } from '../../helpers/formateRate';

type Props = Omit<IRate, 'base_ccy'>;

const CurItem = ({ccy, buy, sale}:Props) => {
    return (
        <li className={styles.cur_item}>
            <div className={styles.cur_item__cur}>
                <div className={styles.cur_item__flag_l}>
                    <img src={getFlag(ccy)} alt="currency flag" />
                </div>
                <p className={styles.cur_item__name_l}>CHF /</p>
                <div className={styles.cur_item__flag_r}>
                    <img src={ua} alt="currency flag" />
                </div>
                <p className={styles.cur_item__name_r}>UAH</p>
            </div>
            <div className={styles.cur_item__price}>{formateRate(buy)}</div>
            <div className={styles.cur_item__price}>{formateRate(sale)}</div>
        </li>
    );
};

export default CurItem;