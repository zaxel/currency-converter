import { create } from "zustand"
import { IRate } from "../interfaces"

type State = {
    rates: Array<IRate>
  }
  
  type Action = {
    setRates: (rates: State['rates']) => void
  }
  
  // Create your store, which includes both state and (optionally) actions
  export const useRatesStore = create<State & Action>((set) => ({
    rates: [],
    setRates: (rates) => set(() => ({ rates: rates })),
  }))