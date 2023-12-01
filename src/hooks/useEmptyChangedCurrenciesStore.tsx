import { IRate } from "../interfaces";
import { useChangedRatesState } from "../store/changedRatesState";

export const useEmptyChangedCurrenciesStore = (rates: Array<IRate>) => {
    const emptyRates = rates.map(el=>{
        return {
            "ccy": el.ccy,
            "buy": "",
            "sale": ""
        }
    })
    const setEmptyRates = useChangedRatesState((state) => state.setRates);
    return setEmptyRates.bind(null, emptyRates); 
}