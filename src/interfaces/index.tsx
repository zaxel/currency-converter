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
    ccy: string,
    base_ccy: string,
    buy: string,
    sale: string
}

export type CurrenciesType = | "UAH" | "CHF"| "CZK"| "GBP" | "ILS" | "JPY" | "NOK" | "PLZ" | "SEK";
