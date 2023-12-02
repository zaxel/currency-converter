import { useChangedRatesState } from "../store/changedRatesState";
import { OperationsTypes } from "../interfaces";


export const useIsRateChanged = (ccy: string | undefined, operation: OperationsTypes) => {
    const changedRates = useChangedRatesState((state) => state.rates);
    const rate = changedRates.find(el=>el.ccy===ccy);
    if(!rate)
        return [false]
    if(!rate[operation])
        return [false]
    return [true];  
  }