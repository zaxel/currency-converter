export interface IFieldsetProps{
    legend: string,
    options: string[],
    val: string,
    isDisabled: boolean,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export interface IConverterProps{
    rate: number
}