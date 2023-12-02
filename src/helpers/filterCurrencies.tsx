import { IFilterReturnData, IFilterProps } from "../interfaces"

export const filterCurrencies = ({selectFrom, selectTo, operation}: IFilterProps ) : IFilterReturnData  => {
    if(operation === 'buy'){
        if (selectFrom === 'UAH') {
            return { saleCur: selectTo, buyCur: selectFrom }
        }
        return { saleCur: selectTo, buyCur: selectFrom }
    }
        if (selectTo === 'UAH') {
            return { saleCur: selectFrom, buyCur: selectTo }
        }
        return { saleCur: selectTo, buyCur: selectFrom }
    
}