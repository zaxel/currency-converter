import { CurrenciesType, IRate } from "../interfaces";

function basicCurSellRates(ccy: CurrenciesType, rates: Array<any>) {
    if (ccy === "UAH")
        return 1;
    return Number(rates.find(el => el.ccy === ccy)?.buy);
}
function basicCurBuyRates(ccy: CurrenciesType, rates: Array<any>) {
    if (ccy === "UAH")
        return 1;
    return Number(rates.find(el => el.ccy === ccy)?.sale);
}
export const getConvertedVal = (rates: Array<IRate>,
                                changedRates: Omit<IRate, "base_ccy">[],
                                val: string,
                                selectFrom: CurrenciesType,
                                selectTo: CurrenciesType,
                                isSaleRateChanged: boolean,
                                isBuyRateChanged: boolean): string => {
    const basicCurSell = basicCurSellRates(selectFrom, isBuyRateChanged ? changedRates : rates);
    const basicCurBuy = basicCurBuyRates(selectTo, isSaleRateChanged ? changedRates : rates);
    return ((+val * basicCurSell) / basicCurBuy).toFixed(2)
}