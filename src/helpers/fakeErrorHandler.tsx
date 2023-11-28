import { FetchReqBeforeError } from "../constants";

export const fakeErrorHandler = () => {
    const requestsCount = localStorage.getItem('converterReqCount') || '0';
    if(+requestsCount>=FetchReqBeforeError){ 
        localStorage.setItem('converterReqCount', '0');
        throw Error("500 Internal Server Error");
    }
    localStorage.setItem('converterReqCount', (Number(requestsCount)+1).toString());
}