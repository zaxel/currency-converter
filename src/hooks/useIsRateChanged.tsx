import { useChangedRatesState } from "../store/changedRatesState";
import { OperationsTypes } from "../interfaces";


export const useIsRateChanged = (ccy: string, operation: OperationsTypes) => {
    const changedRates = useChangedRatesState((state) => state.rates);
    const rate = changedRates.find(el=>el.ccy===ccy);
    if(rate===undefined)
        return [false];
    if(rate[operation]!==undefined)
        return [true]
    return [false];  
  }