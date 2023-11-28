import { CurrenciesType, IRate } from "../interfaces";

function basicCurSellRates(ccy: CurrenciesType, rates: Array<IRate>){
    if(ccy==="UAH")
        return 1;
    return Number(rates.find(el=>el.ccy===ccy)?.buy);
}
function basicCurBuyRates(ccy: CurrenciesType, rates: Array<IRate>){
    if(ccy==="UAH")
        return 1;
    return Number(rates.find(el=>el.ccy===ccy)?.sale);
}
export const getConvertedVal = (rates: Array<IRate>, val: string, selectFrom: CurrenciesType, selectTo: CurrenciesType): string => {
    const basicCurSell = basicCurSellRates(selectFrom, rates);
    const basicCurBuy = basicCurBuyRates(selectTo, rates);

    return ((+val*basicCurSell)/basicCurBuy).toFixed(2)
}