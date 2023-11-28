import { fakeErrorHandler } from "./fakeErrorHandler";

export const fetcher = (url: string) => {
    return fetch(url).then((res) => {
        fakeErrorHandler();
        return res.json();
    })
  };