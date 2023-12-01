import { IFilterReturnData, IFilterProps } from "../interfaces"

export const filterCurrencies = ({selectFrom, selectTo}: IFilterProps) : IFilterReturnData  => {
    if (selectFrom === 'UAH' || selectTo === 'UAH') {
        return { saleCur: selectTo, buyCur: selectTo }
    }
    return { saleCur: selectTo, buyCur: selectFrom }
}