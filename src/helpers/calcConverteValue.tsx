﻿import { Rates } from "../constants";

function basicCurSellRates(ccy: string){
    if(ccy==="UAH")
        return 1;
    return Number(Rates.find(el=>el.ccy===ccy)?.buy);
}
function basicCurBuyRates(ccy: string){
    if(ccy==="UAH")
        return 1;
    return Number(Rates.find(el=>el.ccy===ccy)?.sale);
}
export const getConvertedVal = (val: string, selectFrom: string, selectTo: string): string => {
    // const basicCurSell = basicCurSellRates("UAH");
    const basicCurSell = basicCurSellRates(selectFrom);
    // const basicCurBuy = basicCurBuyRates("GBP");
    const basicCurBuy = basicCurBuyRates(selectTo);

    return ((+val*basicCurSell)/basicCurBuy).toFixed(2)
}