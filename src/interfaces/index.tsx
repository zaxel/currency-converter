import { SetStateAction } from "react";
import { FormControlProps } from "react-bootstrap";



export interface IFieldsetProps{
    legend: string,
    options: string[],
    isDisabled: boolean,
    val: string,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
    selectVal: string,
    onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void
}

export interface IConverterProps{
    rate: number
}
export interface IRate{
    ccy: CurrenciesType,
    base_ccy: CurrenciesType,
    buy: string,
    sale: string
}

export interface IRates{
    rates: Array<IRate>
}

export interface IServiceProps{
    text: string, 
    color: string
}

export interface ICurRatesProps{
    rate: string;
    operation: OperationsTypes;
    ccy: string
}

export type CurrenciesType = | "UAH" | "CHF"| "CZK"| "GBP" | "ILS" | "JPY" | "NOK" | "PLZ" | "SEK";

export type OperationsTypes = | "buy" | "sale";
