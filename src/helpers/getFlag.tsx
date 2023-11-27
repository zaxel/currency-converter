import ua from '../assets/flags/ua.svg';
import ch from '../assets/flags/ch.svg';
import cz from '../assets/flags/cz.svg';
import gb from '../assets/flags/gb.svg';
import il from '../assets/flags/il.svg';
import jp from '../assets/flags/jp.svg';
import no from '../assets/flags/no.svg';
import pl from '../assets/flags/pl.svg';
import se from '../assets/flags/se.svg';

export const getFlag = (name: string) =>{
    switch(name){
        case "UAH":
            return ua;
        case "CHF":
            return ch;
        case "CZK":
            return cz;
        case "GBP":
            return gb;
        case "ILS":
            return il;
        case "JPY":
            return jp;
        case "NOK":
            return no;
        case "PLZ":
            return pl;
        case "SEK":
            return se;
        default:
            return ua;
    }

} 