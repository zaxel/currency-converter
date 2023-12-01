export const ifFitsLimits = (modifiedRate: string, rate: string) => {
    const rateNumber = Number(rate);
    const max = rateNumber + rateNumber*.1;
    const min = rateNumber - rateNumber*.1;
    if(Number(modifiedRate)>max || Number(modifiedRate)<min){
        return false;
    }
    return true;
}