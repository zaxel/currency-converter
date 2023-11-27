import { CurrenciesType } from "../interfaces";

export const onSwapButtonChange = (inputTo: string,
                                    selectTo: CurrenciesType, 
                                    selectFrom: CurrenciesType, 
                                    setInputFrom: (inputFrom: string)=>void, 
                                    setSelectFrom: (selectTo: CurrenciesType)=>void, 
                                    setSelectTo: (selectFrom: CurrenciesType)=>void) => {
    setSelectFrom(selectTo);
    setSelectTo(selectFrom);
    const val = Number(inputTo).toFixed(2);
    setInputFrom(val);
}