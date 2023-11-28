import { IServiceProps } from "../../interfaces";
import styles from "./styles.module.css";

const Service = ({text="service page", color="red"}: IServiceProps) => {
 return(
    <div className={styles.service} style={{color: color}}>{text}</div>
 )   
}

export default Service;