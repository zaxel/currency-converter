import { create } from "zustand"
import { IRate } from "../interfaces"

type State = {
    rates: Array<Omit<IRate, 'base_ccy'>> 
  }
  
  type Action = {
    setRates: (rates: State['rates']) => void
  }
  
  // Create your store, which includes both state and (optionally) actions
  export const useChangedRatesState = create<State & Action>((set) => ({
    rates: [{
      "ccy": "CHF",
      "buy": "40.72170",
      "sale": "40.72170"
  },
  {
      "ccy": "CZK",
      "buy": "",
      "sale": "1.61170"
    },],
    setRates: (rates) => set(() => ({ rates: rates })),  
    
  }))

