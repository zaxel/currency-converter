﻿import { CurrenciesType, IRate } from "../interfaces";

export const InitValue: string = '1';

export const CurOptions: Array<CurrenciesType> = ["UAH", "CHF", "CZK", "GBP", "ILS", "JPY", "NOK", "PLZ", "SEK"];

export const Rates: Array<IRate> = [
    {
        "ccy": "CHF",
        "base_ccy": "UAH",
        "buy": "40.72170",
        "sale": "40.72170"
    },
    {
        "ccy": "CZK",
        "base_ccy": "UAH",
        "buy": "1.61170",
        "sale": "1.61170"
    },
    {
        "ccy": "GBP",
        "base_ccy": "UAH",
        "buy": "45.16910",
        "sale": "45.16910"
    },
    {
        "ccy": "ILS",
        "base_ccy": "UAH",
        "buy": "9.63850",
        "sale": "9.63850"
    },
    {
        "ccy": "JPY",
        "base_ccy": "UAH",
        "buy": "0.24098",
        "sale": "0.24098"
    },
    {
        "ccy": "NOK",
        "base_ccy": "UAH",
        "buy": "3.35600",
        "sale": "3.35600"
    },
    {
        "ccy": "PLZ",
        "base_ccy": "UAH",
        "buy": "8.99570",
        "sale": "8.99570"
    },
    {
        "ccy": "SEK",
        "base_ccy": "UAH",
        "buy": "3.43490",
        "sale": "3.43490"
    }
]