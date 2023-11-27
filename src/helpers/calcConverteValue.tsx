import { Rates } from "../constants";
import { CurrenciesType } from "../interfaces";

function basicCurSellRates(ccy: CurrenciesType){
    if(ccy==="UAH")
        return 1;
    return Number(Rates.find(el=>el.ccy===ccy)?.buy);
}
function basicCurBuyRates(ccy: CurrenciesType){
    if(ccy==="UAH")
        return 1;
    return Number(Rates.find(el=>el.ccy===ccy)?.sale);
}
export const getConvertedVal = (val: string, selectFrom: CurrenciesType, selectTo: CurrenciesType): string => {
    const basicCurSell = basicCurSellRates(selectFrom);
    const basicCurBuy = basicCurBuyRates(selectTo);

    return ((+val*basicCurSell)/basicCurBuy).toFixed(2)
}